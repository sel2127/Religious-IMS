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
// import { authMiddleware } from './middlewares/authMiddleware.js';
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


// Parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Serve static files
app.use(express.static("public"));


// Define API route before applying authMiddleware
// app.get('/api', (req, res) => {
//     res.json({
//         success: 1,
//         message: 'This is a REST API'
//     });
// });

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



// Apply authMiddleware only to routes that require authentication
// app.use(authMiddleware);

// Default route for handling 404 errors
app.use((req, res) => {
    res.status(404).send("Not Found");
});

// Start the server
const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// import express from "express";
// import dotenv from 'dotenv';
// import userRoute from "./routes/UserRoutes.js";
// const app=express();
// app.use(express.json());

// app.use("api/users", userRoute);


// // Start the server
// const port = process.env.APP_PORT;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });