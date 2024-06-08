import { Op } from "sequelize";
import { EventModel } from "../models/EventModel.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
// Fetch all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await EventModel.findAll({
      order: [['createdAt', 'DESC']], // Sort by creation date 

      limit: 4,
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
    limit:3,
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
    if (events.length === 0) {
      return res.status(404).json({ message: 'No events found' });
    }
    return res.status(200).json(events);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error searching for events' });
  }
};
export const deleteEvent = [
  authMiddleware,
  async (req, res) => {
  const { id } = req.params;

  try {
    const event = await EventModel.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Delete the user
    await event.destroy();

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}]