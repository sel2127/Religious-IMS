import { Sequelize } from "sequelize";
import db from "../config/Database.js"; 
import Users from "../models/Users.js";

const { DataTypes } = Sequelize;

  const MemberModel = db.define('Member', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: Users,
          key: 'id',
      }
  },
    
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    gender: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: false
    }
  });
  MemberModel.belongsTo(Users, { foreignKey: 'userId' });


export default MemberModel;