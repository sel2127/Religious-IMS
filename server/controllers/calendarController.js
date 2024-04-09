import { CalendarModel } from "../models/CalendarModel.js";

// Controller to handle the creation of a new event
export const createEvent = async (req, res) => {
  try {
    const { todo, tododate } = req.body;
    const event = await CalendarModel.create({ todo, tododate });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: "Failed to create event" });
  }
};

// Controller to retrieve all events from the database
export const getAllEvents = async (req, res) => {
  try {
    const events = await CalendarModel.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve events" });
  }
};

// Controller to delete an event from the database
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await CalendarModel.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    await event.destroy();
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete event" });
  }
};