import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import AdminListRoute from "./routes/AdminListRoute.js";

dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());

// Define your routes
app.use('/admin', AdminListRoute);
app.use('/user', UserRoute);

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello, world! This is the root path.');
});

// Handle requests to undefined routes
app.use((req, res) => {
    res.status(404).send("Not Found");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});
