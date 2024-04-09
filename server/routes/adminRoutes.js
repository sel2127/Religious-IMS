import express from 'express';
import { insertDefaultAdmin } from '../controllers/adminController.js';

const router = express.Router();

// Route to insert default admin
router.post('/', insertDefaultAdmin);

export default router;