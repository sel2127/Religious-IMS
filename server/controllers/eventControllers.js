const fs = require('fs');
const path = require('path');
const Event = require('../models/event');

exports.uploadEvent = async (req, res) => {
  try {
    const { eventName, eventDate, eventDescription, eventId } = req.body;
    const eventImage = req.file ? req.file.path : null; 

    // Create event in database with image path
    const newEvent = await Event.create({
      eventName,
      eventDate,
      eventDescription,
      eventImage,
      eventId
    });

    res.status(201).json({ message: 'Event uploaded successfully', event: newEvent });
  } catch (error) {
    console.error('Error uploading event:', error);
    res.status(500).json({ error: 'An error occurred while uploading the event' });
  }
};
