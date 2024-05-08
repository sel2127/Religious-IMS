import express from "express";
import  { createFeedback, 
    getAllFeedback,
     getFeedbackById, 
    deleteFeedbackById, 
    updateFeedbackById,
    getFeedbackByName,
    getAllFeedbackWithWriterName,
} from '../controllers/FeedbackController.js';
const router = express.Router();


// Define your routes using the imported app instance
router.post('/api/feedback/create',createFeedback);
router.get('/api/feedback',getAllFeedback)
router.get('/api/feedback/byname/:id',getFeedbackByName)
router.get('/api/feedback/:id',getFeedbackById);
router.get('/api/feedback/all/:9',getAllFeedbackWithWriterName);
router.delete('/api/feedback/:id',deleteFeedbackById);
router.put('/api/feedback/update/:id',updateFeedbackById)

// Export the router
export default router;