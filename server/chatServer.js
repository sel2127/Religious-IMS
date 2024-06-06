import { Server } from 'socket.io';
import http from 'http';

const createChatServer = (app) => {
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.emit('connected', 'Connected to chat server');

    // Assume userId is sent from the client on connection
    socket.on('setUserId', (userId) => {
      socket.userId = userId;

      // Simulating sending chat history (for now, just an empty array)
      socket.emit('chat history', []);
    });

    // Handle incoming chat messages
    socket.on('send message', (message) => {
      // Broadcasting the message to all connected clients
      io.emit('new message', {
        userId: socket.userId,
        content: message.content,
        sender: message.sender,
        timestamp: new Date(),
      });
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected:', socket.id);
    });
  });

  return server;
};

export default createChatServer;
