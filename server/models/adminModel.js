import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/Database.js';

const AdminModel = db.define('Admins', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    validate: {
      notEmpty: true
    },
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: true
    },
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
}, {
  freezeTableName: true
});

export { AdminModel };
