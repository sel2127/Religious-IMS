import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "../models/Users.js";

const { DataTypes } = Sequelize;

const Feedback = db.define("feedback", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id',
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
   
   
});

Feedback.belongsTo(Users, { foreignKey: 'userId' });

// Sync the model with the database
db.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized successfully.');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

export default Feedback;