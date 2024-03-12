const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

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
    type: DataTypes.STRING, 
    allowNull: true
  }
});

module.exports = Event;
