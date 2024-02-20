// server/models/exampleModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ExampleModel = sequelize.define('Example', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = ExampleModel;

// Other models as needed...
