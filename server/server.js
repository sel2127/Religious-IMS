require('dotenv').config(); // Load environment variables from .env file
const { app } = require('./app'); // Import the Express app from app.js
const { sequelize } = require('./app'); // Import the Sequelize instance from app.js

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
