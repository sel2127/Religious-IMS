const express = require('express');
const app = express();

const sequelize = require('./database/connection');
const Event = require('./models/Event');

// Sync models with the database
sequelize.sync({ force: false }) // Set force to true to drop existing tables
  .then(() => {
    console.log('Database and tables synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
