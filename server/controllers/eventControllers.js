const fs = require('fs');
const path = require('path');
const Event = require('../models/event'); // Assuming your model is correctly exported from its file

exports.uploadEvent = async (req, res) => {
  try {
    const { eventName, eventDate, eventDescription,eventId } = req.body;
    const eventImage = req.file ? req.file.originalname : null;

    // Create the event using Sequelize's create method
    const newEvent = await Event.create({
      eventName,
      eventDate,
      eventDescription,
      eventImage, // Use the value from req.file.originalname
      eventId,
    });

    // Respond with success message and created event
    res.status(201).json({ message: 'Event uploaded successfully', event: newEvent });
  } catch (error) {
    console.error('Error uploading event:', error);
    res.status(500).json({ error: 'An error occurred while uploading the event' });
  }
};

