import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from './config/Database.js'
import eventRouter from './routes/eventRoutes.js';
import uploadRouter from './routes/uploadRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import calendarRoutes from './routes/calendarRoutes.js';
import UserRoute from './routes/UserRoutes.js';
import feedbackRoute from './routes/feedbackRoute.js';
import donationRoute from './routes/donationRoutes.js';
import createChatServer from './chatServer.js';
import chatRoutes from './routes/chatRoutes.js'; 
import memberRoute from './routes/memberRoute.js'; 
import passwordRecoveryRoute from './routes/passwordRecoveryRoute.js'; 

dotenv.config();
const app = express();

// Configure CORS
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
}));
db.sync();

// Parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Serve static files
app.use(express.static("public"));

// Define routes
app.use(donationRoute);
app.use(UserRoute); 
app.use(feedbackRoute);
app.use(memberRoute);
app.use("/events", eventRouter);
app.use("/upload", uploadRouter);
app.use("/api", calendarRoutes);

// Mount admin routes
app.use("/admin", adminRouter);
app.use("/chat", chatRoutes); 
app.use(passwordRecoveryRoute);

// Default route for handling 404 errors
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Start the server
const port = process.env.APP_PORT;
const server = createChatServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
