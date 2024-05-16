import express from "express";
import  { createFeedback, 
    getAllFeedback,
     getFeedbackById, 
    deleteFeedbackById, 
    updateFeedbackById,
    getFeedbackByName,
    getAllFeedbackWithWriterName,
    searchFeedback,
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
//router.get('/api/feedback/search',searchFeedback);
router.get('/api/feedback/search/:searchQuery', 
async (req, res) => {
    try {
      const searchQuery = req.params.searchQuery;
      const feedbacks = await searchFeedback(searchQuery);
      res.json(feedbacks);
    } catch (error) {
      console.error("Error handling search query:", error);
      res.status(500).json({ message: "Error searching for feedback" });
    }
  }
);
// Export the router
export default router;