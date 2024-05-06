// models/MemberModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('./user');

const MemberModel = sequelize.define('MemberModel', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id'
        }
      },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING, // Assuming you want to store 'Male' or 'Female'
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
 
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }


}, {
  // Other model options (if any)
});

// Define the association between MemberModel and User models
MemberModel.belongsTo(User, { foreignKey: 'userId' });

module.exports = MemberModel;
