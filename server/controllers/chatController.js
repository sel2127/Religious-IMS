const WebSocket = require('ws'); // WebSocket library
const { validationResult } = require('express-validator'); // For validating request data
const { v4: uuidv4 } = require('uuid'); // For generating message IDs
const jwt = require('jsonwebtoken'); // For token verification
import db from '../config/Database.js';


// Create WebSocket server
const wss = new WebSocket.Server({ noServer: true });

// Store connected clients
const clients = {};

wss.on('connection', (ws, req) => {
  const token = req.cookies.accessToken;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.userId;

  clients[userId] = ws;

  ws.on('close', () => {
    delete clients[userId];
  });
});

exports.getChatHistory = async (req, res) => {
  try {
    const userId = req.user.userId; // Access user ID from authenticated request
    const chatHistory = await db.query('SELECT * FROM messages WHERE user_id = ?', [userId]);
    res.json(chatHistory);
  } catch (error) {
    console.error('Error fetching chat history:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { content } = req.body;
    const userId = req.user.userId; // Access user ID from authenticated request

    // Save message to the database
    const messageId = uuidv4(); // Generate unique message ID
    await db.query('INSERT INTO messages (id, content, user_id, timestamp) VALUES (?, ?, ?, NOW())', [messageId, content, userId]);

    // Broadcast message to connected clients
    const message = { id: messageId, content, user_id: userId, timestamp: new Date() };
    Object.values(clients).forEach(client => {
      client.send(JSON.stringify(message));
    });

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
