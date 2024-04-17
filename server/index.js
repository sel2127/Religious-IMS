import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserRoute from './routes/UserRoute.js';
import AdminListRoute from "./routes/AdminListRoute.js";
import FeedbackRoute from './routes/FeedbackRoute.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const app = express();

db.sync();

// app.use(
//   session({
//     secret: process.env.SESS_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: "auto",
//     },
//   })
// );

app.use(
  cors(
  //   {
  //   credentials: true,
  //   origin: ["http://localhost:3000"],
  //   methods: ["POST", "GET"],
  // }
)
);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(bodyParser.json());


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
  console.log(`Server up and running...on port ${port}`);
});
