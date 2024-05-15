import { EventModel } from "../models/EventModel.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
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

    res.status(201).json({ event });
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