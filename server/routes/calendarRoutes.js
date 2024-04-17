import express from "express";
import {
  createEvent,
  getAllEvents,
  deleteEvent,
} from "../controllers/calendarController.js";

const router = express.Router();

// Route to create a new event
router.post("/calendarevents", createEvent);

// Route to retrieve all events
router.get("/calendarevents", getAllEvents);

// Route to delete an event
router.delete("/calendarevents/:id", deleteEvent);

export default router;