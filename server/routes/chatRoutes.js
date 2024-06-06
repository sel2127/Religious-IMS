import express from 'express';
import { getChatHistory } from '../controllers/chatController.js';

const router = express.Router();

router.get('/chat/:userId', getChatHistory);

export default router;
