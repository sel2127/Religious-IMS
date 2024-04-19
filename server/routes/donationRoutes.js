
import { createDonation } from '../controllers/donationController.js';

import express from 'express';
import { isAutenticated } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/api/donations',isAutenticated, createDonation);

export default router;
