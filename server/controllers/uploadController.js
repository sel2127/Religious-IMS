import { EventModel } from "../models/EventModel.js";
import nodemailer from 'nodemailer';
import axios from 'axios';
import { isAuthenticated } from "../middlewares/authMiddleware.js";


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tassolutions25@gmail.com',
    pass: 'agax sxpd onmy dbjs',
  },
});

// Send email to all users
const sendEmailToUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/admin/users');
    const users = response.data;
    const emailPromises = users.map(async (user) => {
      const mailOptions = {
        from: 'tassolutions25@gmail.com',
        to: user.email,
        subject: 'New Event Uploaded',
        text: 'A new event has been uploaded. Check it out!',
      };
      return transporter.sendMail(mailOptions);
    });
    await Promise.all(emailPromises);
    console.log('Email sent to all users');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Handle file upload and create a new event
export const uploadEvent = async (req, res) => {
  try {
    const { eventname, eventDesc, eventdate } = req.body;
    const eventImage = req.file.filename;

    // Create a new event in the database
    const event = await EventModel.create({
      eventname: eventname,
      eventDesc: eventDesc,
      eventdate: eventdate,
      eventImage: eventImage,
    });

    res.status(201).json({ message:"Event uploaded Successfully",event });
    // res.status(201).json({ event });
    sendEmailToUsers()
      .then(() => {
        res.status(201).json({ event, message: 'Event uploaded and emails sent successfully' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending emails' });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getEventById = [
  isAuthenticated,
  async (req, res) => {
    try {
      const id = req.params.id;
      const event = await EventModel.findOne({ where: { id: id } });
      if (!event) {
        return res.status(404).json({ msg: "event not found" });
      }
      return res.status(200).json(event);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: err.msg });
    }
  },
];