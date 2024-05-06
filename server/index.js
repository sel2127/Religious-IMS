import express from "express";
import cors from 'cors';
<<<<<<< HEAD
import session from "express-session";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
=======
import cookieParser from 'cookie-parser'
>>>>>>> origin/tsimocookie
import db from "./config/Database.js";
import eventRouter from "./routes/eventRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import adminRouter from './routes/adminRoutes.js';
import calendarRoutes from "./routes/calendarRoutes.js";
import UserRoute from "./routes/UserRoutes.js";
import donationRoute from "./routes/donationRoutes.js";

dotenv.config();
const app = express();

// Configure CORS
app.use(cors({
     credentials: true,
    origin: ['http://localhost:3000'],
    methods: ['POST', 'GET'],
}));
db.sync()

// Parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Serve static files
app.use(express.static("public"));
<<<<<<< HEAD


// Configure session middleware
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));
=======
>>>>>>> origin/tsimocookie

// Define routes
app.use(donationRoute);
app.use(UserRoute); // Use the UserRoute without prefixing here
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

// Start the server
const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


