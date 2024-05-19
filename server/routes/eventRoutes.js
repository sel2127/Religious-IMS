import express from "express";
import { countEvent, getAllEvents, deleteEvent, searchEvent } from "../controllers/eventController.js";
import { getEventById } from "../controllers/uploadController.js";

const eventRouter = express.Router();

// Fetch all events
eventRouter.get("/", getAllEvents);

// Delete an event
eventRouter.delete('/:id', deleteEvent);

// Create a new event
// eventRouter.post('/events', eventController.createEvent);

// // Update an event
// eventRouter.put('/events/:id', eventController.updateEvent);
eventRouter.get("/count", countEvent);

eventRouter.get('/:id',getEventById)
eventRouter.get('/search/:query',searchEvent)

export default eventRouter;