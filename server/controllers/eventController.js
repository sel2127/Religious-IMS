import { Op } from "sequelize";
import { EventModel } from "../models/EventModel.js";

// Fetch all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await EventModel.findAll({
      order: [['createdAt', 'DESC']], // Sort by creation date 

      limit: 2,
    });
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const countEvent = async (req, res) => {
  try {
    const events = await EventModel.findAll({

    });
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// search for event
export const searchEvent = async (req, res) => {
  const { query } = req.params;

  try {
    const events = await EventModel.findAll({
      order: [['createdAt', 'DESC']], // sort by date

      where: {
        [Op.or]: [
          { eventName: { [Op.like]: `%${query}%` } },
          { eventDesc: { [Op.like]: `%${query}%` } },
          {    id: query , // Search for event by id

            // eventDate: {
            //   [Op.gte]: new Date(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} 00:00:00`), 
            //   [Op.lte]: new Date(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} 23:59:59`), 
            // },
          },
        ],
      },
    });

    return res.json(events);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error searching for events' });
  }
};