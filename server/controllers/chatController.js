import Chat from '../models/Chat.js';

// Fetch chat history
export const getChatHistory = async (req, res) => {
    try {
        const messages = await Chat.findAll();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Save a new message
export const saveMessage = async (req, res) => {
    const { userId, content, sender } = req.body;
    try {
        const newMessage = await Chat.create({ userId, content, sender });
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
