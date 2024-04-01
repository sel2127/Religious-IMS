import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import AdminListRoute from "./routes/AdminListRoute.js";

dotenv.config();

const app = express();

// (async() => {
//     await db.sync();
// })();

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
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use('/admin',AdminListRoute);
app.use('/user', UserRoute);

app.get('/', (req, res) => {
    res.send('Hello, world! This is the root path.');
});

app.use((req, res) => {
    res.status(404).send("Not Found");
})

const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server up and running...on port ${port}`);
});