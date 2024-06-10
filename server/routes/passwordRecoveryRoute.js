import express from 'express';
const router = express.Router();
import { sendEmail } from '../controllers/passwordRecoveryController.js';
import { localVariables } from "../middlewares/authMiddleware.js";
import {generateOTP} from "../controllers/usersController.js";



router.post("/send_recovery_email",localVariables,generateOTP);

export default router;