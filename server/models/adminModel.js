import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

// const {DataTypes} = Sequelize;

// table name - adminlist
const AdminModel = db.define(
  'admin', 
  {
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

// AdminModel.sync({ alter: true }) // Replace 'force' with 'alter' if you don't want to drop existing data
//   .then(() => console.log("Admin model synced"))
//   .catch((error) => console.error("Error syncing admin model:", error));


export {AdminModel};
