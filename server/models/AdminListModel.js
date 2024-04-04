import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

// table name - adminlist
const AdminList = db.define('adminlist', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            notEmpty: true
        }
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
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
        validate: {
            notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },  
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
}, {
    freezeTableName: true
});

export default AdminList;