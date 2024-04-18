import express from "express";
import cors from 'cors';
import session from "express-session";
import db from "./config/Database.js";
import dotenv from 'dotenv';
import UserRoute from "./routes/UserRoutes.js";
import donationRoute from "./routes/donationRoutes.js";
import eventRouter from "./routes/eventRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import adminRouter from './routes/adminRoutes.js';
import calendarRoutes from "./routes/calendarRoutes.js";
import { authMiddleware } from './middlewares/authMiddleware.js';
dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}))


app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's domain
  credentials: true, // Enable sending cookies in cross-origin requests
}));
app.options('*', cors());

app.use(express.json());

db.sync();

// Routes
app.use(donationRoute);

app.use('/user', UserRoute);

app.use("/events", eventRouter);

// Mount upload routes
app.use("/upload", uploadRouter);

// Mount calendar routes
app.use("/api", calendarRoutes);

// Mount admin routes
// app.use("/adminlogin", adminRouter);
app.use("/admin", adminRouter);

// Default route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use((req, res) => {
    res.status(404).send("Not Found");
})

// Start the server
const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
