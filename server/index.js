import express from "express";
import cors from 'cors';
import session from "express-session";
import db from "./config/Database.js";
import eventRouter from "./routes/eventRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import adminRouter from './routes/adminRoutes.js';
import calendarRoutes from "./routes/calendarRoutes.js";
import { authMiddleware } from './middlewares/authMiddleware.js';
import UserRoute from "./routes/UserRoute.js";

const app = express();
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's domain
  credentials: true, // Enable sending cookies in cross-origin requests
}));
app.options('*', cors());

app.use(express.json());

const port = 5000;
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
app.use(
  session({
    secret: '2759fkn3knvkebvuebfkgh3ubevgo34yginreihg83rgbv',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
)

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