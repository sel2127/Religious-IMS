
import { createDonation } from '../controllers/donationController.js';

import express from 'express';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/api/donations',isAuthenticated, createDonation);

export default router;
