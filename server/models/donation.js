import { DataTypes } from 'sequelize';
import db from '../config/Database.js';
import User from '../models/Users.js'; 

const Donation = db.define('Donation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // Referencing the User model
      key: 'id' // Referencing the primary key of the User model
    }
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tx_ref: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

// Define association with the User model
Donation.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE' // Optional: Cascade delete if user is deleted
});

export default Donation;
