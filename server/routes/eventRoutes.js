import express from "express";
import { countEvent, getAllEvents, searchEvent } from "../controllers/eventController.js";
import { getEventById } from "../controllers/uploadController.js";

const eventRouter = express.Router();

// Fetch all events
eventRouter.get("/", getAllEvents);
eventRouter.get("/count", countEvent);

eventRouter.get('/:id',getEventById)
eventRouter.get('/search/:query',searchEvent)

export default eventRouter;