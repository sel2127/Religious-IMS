import express from "express";
import { getAllEvents, deleteEvent } from "../controllers/eventController.js";

const eventRouter = express.Router();

// Fetch all events
eventRouter.get("/", getAllEvents);

// Delete an event
eventRouter.delete('/:id', deleteEvent);

// Create a new event
// eventRouter.post('/events', eventController.createEvent);

// // Update an event
// eventRouter.put('/events/:id', eventController.updateEvent);

export default eventRouter;