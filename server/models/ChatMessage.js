import { DataTypes } from 'sequelize';
import db from '../config/Database.js';

const ChatMessage = db.define('ChatMessage', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default ChatMessage;
