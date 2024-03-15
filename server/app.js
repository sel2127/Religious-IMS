const express = require('express');
const Sequelize = require('sequelize');

// Import the eventUploadRouter
const eventUploadRouter = require('./routes/eventRoutes');

const sequelize = new Sequelize('capstone', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

// Mount the eventUploadRouter at the '/api/events' endpoint
app.use('/api/events', eventUploadRouter);

// Test route for accessing the backend on the browser
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
