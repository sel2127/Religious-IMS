import ChatMessage from '../models/ChatMessage.js';

// Get chat history for a user
export const getChatHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const messages = await ChatMessage.findAll({ where: { userId } });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Save a new chat message
export const saveMessage = async (message) => {
  try {
    await ChatMessage.create(message);
  } catch (error) {
    console.error('Error saving message:', error);
  }
};
