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

import UserRoute from './routes/UserRoute.js';
import AdminListRoute from "./routes/AdminListRoute.js";
import FeedbackRoute from './routes/FeedbackRoute.js'
import cookieParser from 'cookie-parser';
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


// Define API route before applying authMiddleware
// app.get('/api', (req, res) => {
//     res.json({
//         success: 1,
//         message: 'This is a REST API'
//     });
// });

// Configure session middleware
app.use(session({
db.sync();

app.use(cookieParser());

app.use(
  session({
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
app.use("/events", eventRouter);

// Mount upload routes
app.use("/upload", uploadRouter);

// Mount calendar routes
app.use("/api", calendarRoutes);

// Mount admin routes
// app.use("/adminlogin", adminRouter);
app.use("/admin", adminRouter);



// Apply authMiddleware only to routes that require authentication
// app.use(authMiddleware);

// Default route for handling 404 errors
app.use((req, res) => {
    res.status(404).send("Not Found");
});
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
  })
);

app.use(express.json());

// Start the server
const port = process.env.APP_PORT;
app.use("/admin", AdminListRoute);
app.use("/user", UserRoute);
app.use(FeedbackRoute)

app.get("/", (req, res) => {
  res.send("Hello, world! This is the root path.");
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});
//Start the server
const port = process.env.APP_PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  console.log(`Server up and running...on port ${port}`);
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
