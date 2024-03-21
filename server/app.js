const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const eventRoutes = require('./routes/eventRoutes');

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

