// import express from "express";
// import multer from "multer";
// import path from "path";
// import { EventModel } from "./models/EventModel.js";
// import db from "./config/Database.js";
// import cors from 'cors';
// import mysql from 'mysql2';
// // import { getAllEvents } from "./controllers/eventController.js";

// const app = express();
// app.use(cors());
// app.use(express.json());
// const port = 5000;

// // db.sync({ alter: true })
// //   .then(() => {
// //     console.log("Database synced");
// //   })
// //   .catch((error) => {
// //     console.error("Error syncing database:", error);
// //   });

// // Set up multer storage for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../client/public/assets/");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// // Express middleware to serve static files
// app.use(express.static("public"));

// // Route to handle file upload
// // uploading an event
// app.post("/upload", upload.single("image"), async (req, res) => {
//   try {
//     const { eventname, eventDesc, eventdate } = req.body;
//     const eventImage = req.file.filename;

//     // Create a new event in the database
//     const event = await EventModel.create({
//       eventname: eventname,
//       eventDesc: eventDesc,
//       eventdate: eventdate,
//       eventImage: eventImage,
//     });

//     res.status(201).json({ event });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Fetch all events
// app.get("/events", async (req, res) => {
//   try {
//     const events = await EventModel.findAll();
//     res.status(200).json(events);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });


// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

import express from "express";
import cors from 'cors';
import eventRouter from "./routes/eventRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import adminRoutes from './routes/adminRoutes.js';
import db from "./config/Database.js";
import calendarRoutes from "./routes/calendarRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

// db.sync({ alter: true })
//   .then(() => {
//     console.log("Database synced");
//   })
//   .catch((error) => {
//     console.error("Error syncing database:", error);
//   });

// Express middleware to serve static files
app.use(express.static("public"));

// Mount event routes
app.use("/events", eventRouter);

// Mount upload routes
app.use("/upload", uploadRouter);

// Mount calendar routes
app.use("/api", calendarRoutes);

// Mount admin routes
app.use('/adminlogin', adminRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});