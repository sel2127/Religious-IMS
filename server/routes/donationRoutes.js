
import { createDonation, getAllDonation } from '../controllers/donationController.js';

import express from 'express';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/api/donations',isAuthenticated, createDonation);
router.get('/api/donation',getAllDonation);

export default router;
