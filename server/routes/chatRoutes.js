import express from 'express';
import { getChatHistory, saveMessage } from '../controllers/chatController.js';


const router = express.Router();

// Get chat history
router.get('/chat/history', getChatHistory);

// Save a new message
router.post('/chat/send', saveMessage);

export default router;
