import express from 'express';
const router = express.Router();
import { sendEmail } from '../controllers/passwordRecoveryController.js';


router.post("/send_recovery_email", sendEmail);

export default router;