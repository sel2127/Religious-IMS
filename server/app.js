const express = require('express');
const app = express();
const cors = require('cors');
const multer  = require('multer');
const eventRoutes = require('./routes/eventRoutes');
const {Sequelize} = require('sequelize');
const sequelize=require('./config/sequelize')

// Import the eventUploadRouter
const eventUploadRouter = require('./routes/eventUploadRouter');
//import feedback route here 
const feedbackRoute=require('./routes/feedbackRoute');
//import user routes here 
const userRoute=require('./routes/userRoute');
app.use(cors({
  origin: 'http://localhost:3000', 
}));
app.use(express.json());
app.use('/api/events', eventUploadRouter);
app.use('/api/events', eventRoutes); 
app.use('/',feedbackRoute);
app.use('/api/register',userRoute);
app.use('/api/login',userRoute);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
// Initialize multer with the configured storage
// const upload = multer({ storage: storage });
const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Test route for accessing the backend on the browser
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

  module.exports={app,sequelize};
