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
import donationRoute from "./routes/donationRoutes.js";
import FeedbackRoute from './routes/FeedbackRoute.js'
import path from 'path'
import { Sequelize } from "sequelize";
const app = express();
const __dirname = path.resolve();

// Serve uploaded files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
dotenv.config();

// Configure CORS
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000'],
    methods: ['POST', 'GET','PUT','DELETE'],
}));
db.sync()

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
app.use(UserRoute); // Use the UserRoute without prefixing here
app.use(FeedbackRoute);
app.use("/events", eventRouter);

// Mount upload routes
app.use("/upload", uploadRouter);

// Mount calendar routes
app.use("/api", calendarRoutes);

// Mount admin routes
app.use("/admin", adminRouter);

// Default route for handling 404 errors
app.use((req, res) => {
    res.status(404).send("Not Found");
});

 //Start the server
 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
 });