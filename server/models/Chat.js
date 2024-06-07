import { DataTypes } from 'sequelize';
import db from '../config/Database.js';
import User from './Users.js';
import { AdminModel } from './adminModel.js';

const Chat = db.define('Chat', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  adminId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AdminModel,
      key: 'id',
    },
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Chat;
