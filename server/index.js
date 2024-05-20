import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser'
import db from "./config/Database.js";
import eventRouter from "./routes/eventRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import adminRouter from './routes/adminRoutes.js';
import calendarRoutes from "./routes/calendarRoutes.js";
import { authMiddleware } from './middlewares/authMiddleware.js';
import UserRoute from "./routes/UserRoute.js";
import dotenv from 'dotenv';
import exphbs from 'express-handlebars';

dotenv.config();
const app = express();
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's domain
  credentials: true, // Enable sending cookies in cross-origin requests
}));
app.options('*', cors());

app.use(express.json());
app.use(cookieParser());

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const port = process.env.APP_PORT;
// new
// db.sync({ alter: true })
//   .then(() => {
//     console.log("Database synced");
//   })
//   .catch((error) => {
//     console.error("Error syncing database:", error);
//   });

// Express middleware to serve static files
app.use(express.static("public"));

await db.sync();

// Authentication middleware
// app.use(authMiddleware);

app.use('/user', UserRoute);

// Mount event routes
app.use("/events", eventRouter);

// Mount upload routes
app.use("/upload", uploadRouter);

// Mount calendar routes
app.use("/api", calendarRoutes);

// Mount admin routes
// app.use("/adminlogin", adminRouter);
app.use("/admin", adminRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});