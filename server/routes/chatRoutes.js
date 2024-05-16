const express = require('express');
const router = express.Router();
const chatController = require('./chatController');
const { isAuthenticated } = require('./authMiddleware'); // Import isAuthenticated middleware

router.get('/chat/history', isAuthenticated, chatController.getChatHistory);
router.post('/chat/send', isAuthenticated, chatController.sendMessage);

module.exports = router;
