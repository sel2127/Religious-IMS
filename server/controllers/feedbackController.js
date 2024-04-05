import express from "express";
const app = express();
import multer from "multer";
import cors from "cors";
import path from "path";
import Feedback from "../models/FeedbackModel.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors());
// Serve  files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
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

// API  to submit feedback with image from the form
export const createFeedback = async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Please provide name, email, and message" });
    }

    const imagePath = req.file
      ? path.join(__dirname, "uploads/", req.file.filename)
      : null;

    try {
      await Feedback.create({
        name,
        email,
        message,
        imagePath,
      });
      res.json({
        message: "Feedback submitted successfully",
        imagePath: imagePath,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error submitting feedback" });
    }
  });
};
// api to retrive feedback
export const getAllFeedback = async (req, res) => {
  try {
    const feedbackList = await Feedback.findAll();
    return res.json(feedbackList);
    // res.json({feedbackList})
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getFeedbackById = async (req, res) => {
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
};
export const deleteFeedbackById = async (req, res) => {
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
};
export const updateFeedbackById = async (req, res) => {
  const id = req.params.id;
  const updatedFeedback = req.body;
  try {
    const feedback = await Feedback.findByPk(id);
    if (!feedback) {
      return res.status(404).json({ message: "feedback not found" });
    }
    //update feedback
    await Feedback.update(updatedFeedback, { where: { id: id } });
    return res.status(200).json({ message: "feddback updated successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error for updating feedback" });
  }
};
