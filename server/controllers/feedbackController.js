import express from "express";
const app = express();
import multer from "multer";
import cors from "cors";
import path from "path";
import Feedback from "../models/FeedbackModel.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { error } from "console";
import { where } from "sequelize";
import { isAuthenticated, isFeedbackCreator } from "../middlewares/authMiddleware.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors());

// Serve  files from the 'uploads' directory
app.use(express.static("uploads"));
// Set up storage for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Create feedback endpoint
export const createFeedback = [
  isAuthenticated,
  upload.single("image"),
  async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Please provide name, email, and message" });
    }

    const imagePath = req.file ? req.file.path : null;
    //get user id form cookie
    const userId=req.userId;

    try {
      // Create a new feedback record in the database
     const feedback= await Feedback.create({
      userId,
      name,
        email,
        message,
        imagePath,
       
      });

      res.json({
        message: "Feedback submitted successfully",
        imagePath: imagePath,
        feedbackId: feedback.id,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error submitting feedback" });
    }
  },
];
// api to retrive feedback
export const getAllFeedback = [
  // isAuthenticated,
  async (req, res) => {
  try {
    const feedbackList = await Feedback.findAll();
    return res.json(feedbackList);
    // res.json({feedbackList})
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
]
export const getFeedbackById = [
  isAuthenticated,
  async (req, res) => {
  try {
    const id = req.params.id;
    const feedback = await Feedback.findOne({ where: { id: id } });
    if (!feedback) {
      return res.status(404).json({ msg: "feedback not found" });
    }
    return res.status(200).json(feedback);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: err.msg });
  }
}
];

export const deleteFeedbackById = [ 
  isAuthenticated,
  isFeedbackCreator,
  async (req, res) => {
  try {
    const id = req.params.id;
    const feedback = await Feedback.findOne({ where: { id: id } });
    if (!feedback) {
      return res.status(404).json({ message: "feedback not found" });
    }
    // delete feedback
    await Feedback.destroy({ where: { id: id } });
    return res.status(200).json({ message: "feedback deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error for deleting feedback" });
  }
}
]



export const updateFeedbackById = [
  isAuthenticated,
  isFeedbackCreator,
  upload.single("image"),
  async (req, res) => {
    const id = req.params.id;
    const { name, email, message } = req.body;
    try {
      const feedback = await Feedback.findByPk(id);
      if (!feedback) {
        return res.json({ message: "feedabck not found" });
      }
      //update feedback information
      feedback.name = name;
      feedback.email = email;
      feedback.message = message;

      if (req.file) {
        feedback.imagePath = req.file.path;
      }
      await feedback.update({ where: { id: id } });
      await feedback.save();

      res
        .status(200)
        .json({ message: "feedback updated successfully:", feedback });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error for updating feedback" });
    }
  },
];

