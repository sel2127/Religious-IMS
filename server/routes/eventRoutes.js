const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventControllers');

// Define the route handler for uploading events
router.post('/upload', eventController.uploadEvent);

// Export the router
module.exports = router;
