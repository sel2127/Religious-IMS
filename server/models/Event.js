const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Make sure to adjust the path if necessary

const Event = sequelize.define('Event', {
  eventName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  eventDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  eventDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  eventImage: {
    type: DataTypes.STRING, // Store image path as string
    allowNull: true // Allow null if no image uploaded
  },
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
});

module.exports = Event;
