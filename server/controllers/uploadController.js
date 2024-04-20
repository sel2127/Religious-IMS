import { EventModel } from "../models/EventModel.js";

// Handle file upload and create a new event
export const uploadEvent = async (req, res) => {
  try {
    const { eventname, eventDesc, eventdate } = req.body;
    const eventImage = req.file.filename;

    // Create a new event in the database
    const event = await EventModel.create({
      eventname: eventname,
      eventDesc: eventDesc,
      eventdate: eventdate,
      eventImage: eventImage,
    });

    res.status(201).json({ event });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};