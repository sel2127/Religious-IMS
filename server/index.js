import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import AdminListRoute from "./routes/AdminListRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db:db
})

// (async() => {
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use(AdminListRoute);
app.use(UserRoute);
app.use(AuthRoute);

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello, world! This is the root path.');
});

// Handle requests to undefined routes
app.use((req, res) => {
    res.status(404).send("Not Found");
});

// store.sync();

const port = process.env.APP_PORT || 5000;
app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});
