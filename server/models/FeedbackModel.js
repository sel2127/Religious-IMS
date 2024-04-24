import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

// feedback table 
const Feedback = db.define("feedback", {
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notNull: {
                msg: 'Name is required'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            isEmail: {
                msg: 'Invalid email format'
            }
        }
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notNull: {
                msg: 'Message is required'
            }
        }
    },
    imagePath: {
        type: DataTypes.STRING,
        allowNull: true 
    },
});
export default Feedback;