'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Feedback.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING,
    imagePath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};

const {Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');  

// feedback model requires database
const Feedback = sequelize.define('feedback', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.STRING,
    },
    imagePath: {
      type: DataTypes.STRING,
    },
  });
  

module.exports = Feedback;