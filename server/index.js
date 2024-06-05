import express from "express";
import cors from 'cors';
import session from "express-session";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import eventRouter from "./routes/eventRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import adminRouter from './routes/adminRoutes.js';
import calendarRoutes from "./routes/calendarRoutes.js";
import UserRoute from "./routes/UserRoutes.js";
import feedbackRoute from "./routes/feedbackRoute.js";
import donationRoute from "./routes/donationRoutes.js";
import createChatServer from "./chatServer.js";
import chatRoutes from "./routes/chatRoutes.js"; // Import chat routes

dotenv.config();
const app = express();

// Configure CORS
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
}));
db.sync();

// Parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Serve static files
app.use(express.static("public"));

// Configure session middleware
app.use(session({
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: 'auto'
  }
}));

// Define routes
app.use(donationRoute);
app.use(feedbackRoute);
app.use(UserRoute);
app.use("/events", eventRouter);
app.use("/upload", uploadRouter);
app.use("/api", calendarRoutes);
app.use("/admin", adminRouter);
app.use("/chat", chatRoutes); // Use chat routes

// Default route for handling 404 errors
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Start the server with chat functionality
const port = process.env.APP_PORT || 5000; // Use a default port if not specified
const server = createChatServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
