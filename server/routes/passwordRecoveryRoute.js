import express from 'express';
const router = express.Router();
import { sendEmail } from '../controllers/passwordRecoveryController.js';


router.post("/send_recovery_email", (req, res) => {
    sendEmail(req.body)
      .then((response) => res.send(response.message))
      .catch((error) => res.status(500).send(error.message));
  });

export default router;