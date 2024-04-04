import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import AdminList from "./AdminListModel.js";

const { DataTypes } = Sequelize;

// table name - user
const Users = db.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      validate: {
        notEmpty: true,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },    
    // adminsId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //       notEmpty: true,
    //     },
    //   },   
  },
  {
    freezeTableName: true,
  }
);

// AdminList.hasMany(Users);
// Users.belongsTo(AdminList, {foreignKey: 'adminsId'});

export default Users;
