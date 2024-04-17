import express from "express";
import  { createFeedback, 
    getAllFeedback,
     getFeedbackById, 
    deleteFeedbackById, 
    updateFeedbackById} from '../controllers/FeedbackController.js';
const router = express.Router();


// Define your routes using the imported app instance
router.post('/api/feedback/create',createFeedback);
router.get('/api/feedback',getAllFeedback)
router.get('/api/feedback/:id',getFeedbackById);
router.delete('/api/feedback/:id',deleteFeedbackById);
router.put('/api/feedback/update/:id',updateFeedbackById)

// Export the router
export default router;