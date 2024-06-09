
import express from 'express';
import { sendContactEmail } from '../controllers/contactController.js'; // Import controller function

const router = express.Router();

router.post('/contact', sendContactEmail); // Define POST route for /contact

export default router;




