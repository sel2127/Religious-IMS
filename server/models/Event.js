'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventDescription: DataTypes.TEXT,
    eventImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
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
