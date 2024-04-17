import { EventModel } from "../models/EventModel.js";

// Fetch all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await EventModel.findAll();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};