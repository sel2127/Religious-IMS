const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Make sure to adjust the path if necessary

const Event = sequelize.define('Event', {
  
  eventName: DataTypes.STRING,
  eventDate: DataTypes.DATE,
  eventDescription: DataTypes.TEXT,
  eventImage: DataTypes.STRING,
  eventId: DataTypes.INTEGER
});

module.exports = Event;
