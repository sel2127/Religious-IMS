import express from "express";
const app = express();
import multer from "multer";
import cors from "cors";
import path from "path";
import Feedback from "../models/FeedbackModel.js";
import Users from "../models/Users.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Op } from 'sequelize';

import jwt, { decode } from "jsonwebtoken";

import {
  isAuthenticated,
  isFeedbackCreator,
} from "../middlewares/authMiddleware.js";
import { Sequelize, where } from "sequelize";
const __filename = fileURLToPath(import.meta.url);

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
  async (req, res) => {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Please provide message" });
    }

    const userId = req.userId;

    try {
      const existingFeedback = await Feedback.findOne({ where: { userId } });
      if (existingFeedback) {
        return res
          .status(400)
          .json({ error: "User has already submitted feedback" });
      }

      const feedback = await Feedback.create({
        userId,
        message,
      });

      res.json({
        message: "Feedback submitted successfully",
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
  },
];
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
      return res.status(500).json({ msg: error.msg });
    }
  },
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
  },
];

export const updateFeedbackById = [
  isAuthenticated,
  isFeedbackCreator,
  upload.single("image"),
  async (req, res) => {
    const id = req.params.id;
    // const { name, email, message } = req.body;
    const { message } = req.body;

    try {
      const feedback = await Feedback.findByPk(id);
      if (!feedback) {
        return res.json({ message: "feedabck not found" });
      }
      //update feedback information
      //feedback.name = name;
      //feedback.email = email;
      feedback.message = message;

      // if (req.file) {
      //   feedback.imagePath = req.file.path;
      // }
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


export const getFeedbackByName = [
  async (req, res) => {
    const { id } = req.params;
    try {
      const feedback = await Feedback.findAll({
        where: { userId: id },
        include: [
          {
            model: Users,
            attributes: ["firstName","lastName", "email"],
            required: true,
            as: "user",
          },
        ],
      });

      if (feedback.length > 0) {
        const formattedFeedback = feedback.map((item) => {
          console.log("User data for feedback item:", item.user);

          const firstName = item.user ? item.user.firstName : null;
          const email = item.user ? item.user.email : null; 
          const lastName = item.user ? item.user.lastName : null;
          return {
            feedbackId: item.id,
            userId: item.userId,
            date: item.date,
            firstName,
            lastName,
            email,

            message: item.message,
          };
        });
        res.json(formattedFeedback);
      } else {
        res
          .status(404)
          .json({ message: "Feedback not found for the specified user." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
];
export const getAllFeedbackWithWriterName = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll({
      include: [
        {
          model: Users,
          attributes: ['firstName', 'lastName', 'email'],
          as: 'user',
        },
      ],
      order: [['createdAt', 'DESC']], 
      limit: 10, 
    });

    if (feedbacks.length > 0) {
      const formattedFeedbacks = feedbacks.map((item) => {
        const user = item.user;

        return {
          feedbackId: item.id,
          userId: item.userId,
          date: item.createdAt,
          writer: `${user.firstName} ${user.lastName}`,
          email: user.email,
          message: item.message,
        };
      });

      res.json(formattedFeedbacks);
    } else {
      console.log('No feedback found');
      res.status(404).json({ message: 'No feedback found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};



// Controller function for searching feedback
export const searchFeedback = async (searchQuery) => {
  try {
    const feedback = await Feedback.findAll({
      where: {
        [Sequelize.Op.or]: [
          { message: { [Sequelize.Op.like]: `%${searchQuery}%` } },
          { userId: { [Sequelize.Op.like]: `%${searchQuery}%` } },
          { '$user.firstName$': { [Sequelize.Op.like]: `%${searchQuery}%` } }, 
          { '$user.lastName$': { [Sequelize.Op.like]: `%${searchQuery}%` } }, 
          { '$user.email$': { [Sequelize.Op.like]: `%${searchQuery}%` } },

        ],
      },
      include: [
        {
          model: Users,
          as: 'user',
          attributes: ['firstName', 'lastName', 'email'],
        },
      ],
    });
    //display feedback
    if(feedback.length>0){
      const searchFeedback=feedback.map((feedback)=>{
        const user=feedback.user;
return{
  feedbackId: feedback.id,
  userId: feedback.userId,
  date: feedback.createdAt,
  writer: `${user.firstName} ${user.lastName}`,
  email: user.email,
  message: feedback.message,

}      
})
return searchFeedback;
    }
    //return feedback;
  } catch (error) {
    console.error('Error searching for feedback:', error);
    return [];
  }
};

export const search = async (req, res) => {
  const searchTerm = req.query.q; 

  try {
    let feedback;

    if (searchTerm) {
      feedback = await Feedback.findAll({
        where: {
          [Op.or]: [
            { message: { [Op.iLike]: `%${searchTerm}%` } }, 
            { userId: searchTerm }, // Search for feedback by userId
          ],
        },
        include: [
          {
            model: Users,
            attributes: ['firstName', 'lastName', 'email'],
            as: 'user',
            where: {
              [Op.or]: [
                { firstName: { [Op.iLike]: `%${searchTerm}%` } }, // Case-insensitive search for writer's first name
                { lastName: { [Op.iLike]: `%${searchTerm}%` } }, // Case-insensitive search for writer's last name
              ],
            },
          },
        ],
      });
    } else {
      feedback = await Feedback.findAll({
        include: [
          {
            model: Users,
            attributes: ['firstName', 'lastName', 'email'],
            as: 'user',
          },
        ],
      });
    }

    if (feedback.length > 0) {
      const formattedFeedback = feedback.map((item) => {
        const user = item.user;

        return {
          feedbackId: item.id,
          userId: item.userId,
          date: item.createdAt,
          writer: `${user.firstName} ${user.lastName}`,
          email: user.email,
          message: item.message,
        };
      });

      res.json(formattedFeedback);
    } else {
      console.log('No feedback found');
      res.status(404).json({ message: 'No feedback found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};













