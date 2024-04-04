require('dotenv').config(); // Load environment variables from .env file
const { app ,sequelize} = require('./app'); // Import the Express app from app.js

const PORT = process.env.PORT || 5000;
// Synchronize the Sequelize models with the database
sequelize.sync()
  .then(() => {
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error synchronizing database:', error);
  });