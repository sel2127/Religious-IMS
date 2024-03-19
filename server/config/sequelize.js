const { Sequelize } = require('sequelize');

// Initialize Sequelize with your database credentials
const sequelize = new Sequelize('capstone', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Change this according to your database type
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
