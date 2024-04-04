const express = require('express');
const feedbackController=require('../controllers/feedbackController');
const router = express.Router();
const upload =require('../controllers/multerConfig');
// Define  routes using the imported app instance
router.use('/', feedbackController);
// router.post('/api/feedback', upload.single('image'), feedbackController.postFeedback); 
// Export the router
module.exports = router;