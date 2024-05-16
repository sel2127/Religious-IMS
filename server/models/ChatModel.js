import { DataTypes } from 'sequelize';
import db from '../config/Database.js';
import User from '../models/User.js';

const Chat = db.define('Chat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Chat.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

export default Chat;