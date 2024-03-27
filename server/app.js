const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const eventRoutes = require('./routes/eventRoutes');
const Sequelize = require('sequelize');

// Import the eventUploadRouter
const eventUploadRouter = require('./routes/eventUploadRouter');

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

app.use(cors({
  origin: 'http://localhost:3000', 
}));
app.use(express.json());
app.use('/api/events', eventRoutes); 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
// Initialize multer with the configured storage
const upload = multer({ storage: storage });
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

