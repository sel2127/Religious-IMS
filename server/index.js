import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoutes.js";
import donationRoute from "./routes/donationRoutes.js";

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
    credentials: true,
    origin: ['http://localhost:3000'],
    methods : ['POST' , 'GET' ],
}));

app.use(express.json());

// Routes
app.use(donationRoute);
app.use(UserRoute); // Use the UserRoute without prefixing here

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
    console.log(`Server up and running...on port ${port}`);
});
