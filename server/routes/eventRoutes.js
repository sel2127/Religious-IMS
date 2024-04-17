import express from "express";
import { getAllEvents } from "../controllers/eventController.js";

const eventRouter = express.Router();

// Fetch all events
eventRouter.get("/", getAllEvents);

export default eventRouter;