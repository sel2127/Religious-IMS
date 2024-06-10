import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import { AdminModel } from "./adminModel.js";

const EventModel = db.define(
  "event",
  {
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: AdminModel,
          key: 'id',
      }
  },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      validate: {
        notEmpty: true,
      },
    },
    eventname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventDesc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventdate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventImage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);
EventModel.belongsTo(AdminModel, { foreignKey: 'adminId' });

export { EventModel };