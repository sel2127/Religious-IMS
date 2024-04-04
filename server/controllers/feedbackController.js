// Import required Node.js modules
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('validator');
const multer = require('multer');
const cors=require('cors');
const path = require('path');
 const app = express();
 const Feedback=require('../models/feedback');
// const upload=require('../controllers/multerConfig')

 app.use(cors());
// Middleware setup
app.use(bodyParser.json()); // Parse JSON requests

// setting up for storage
//feedback controllers
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up storage for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));  
  }
});

const upload = multer({ storage: storage });

// API  to submit feedback with image from the form
app.post('/api/feedback', upload.single('image'), async (req, res) => {
  const { name, email, message } = req.body;
  const imagePath = req.file ? path.join(__dirname, 'uploads/', req.file.filename) : null; 
console.log(imagePath);
  try {
    await Feedback.create({
     name,
      email,
      message,
      imagePath,
    });

    res.json({ message: 'Feedback submitted successfully' });
  } catch (err) {
   console.error(err);
   res.status(500).json({ message: 'Error submitting feedback' });
  }
});

// Api for retriving feedback 
    app.get('/api/feedback' ,async(req,res)=>{
        try {
            const feedbackList= await Feedback.findAll();
        res.json(feedbackList);
        } catch (error) {
            console.log(err)
            res.status(500).json({error:"Error for fetching feedback."})
        }
    });
    //export feedback controller 
    module.exports = app;
 




