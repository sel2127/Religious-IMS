// Import necessary modules
const express = require('express');
const router = express.Router();
const Event = require('../models/event'); // Import the Event model defined with Sequelize

// Define the route handler for uploading events
router.post('/api/events/upload', async (req, res) => {
  try {
    // Parse request body and extract event data
    const { eventName, eventDate, eventDescription, eventImage } = req.body;

    // Use Sequelize to create a new event record in the database
    const newEvent = await Event.create({
      eventName,
      eventDate,
      eventDescription,
      eventImage
    });

    // Send a success response
    res.status(201).json({ message: 'Event uploaded successfully', event: newEvent });
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error uploading event:', error);
    res.status(500).json({ error: 'An error occurred while uploading the event' });
  }
});

// Export the router
module.exports = router;
