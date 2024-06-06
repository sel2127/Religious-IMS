import express from "express";
import multer from "multer";
import path from "path";
import { uploadEvent } from "../controllers/uploadController.js";

const uploadRouter = express.Router();

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/assets/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Route to handle file upload (uploading an event)
uploadRouter.post("/", upload.single("image"), uploadEvent);
// uploadRouter.post('/upload', handleFormSubmit);

export default uploadRouter;