import express from 'express';
import { sendMessage, getChatMessages } from '../controllers/chatController.js';
import { isAuthenticated, authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/send-message', isAuthenticated, authMiddleware, sendMessage);
router.get('/chat-messages/:userId/:adminId', isAuthenticated, getChatMessages);

export default router;
