import express from 'express';
import { insertDefaultAdmin, logout } from '../controllers/adminController.js';
import { updateAdminProfile, uploadImage } from '../controllers/adminController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { getAdminProfile } from '../controllers/adminController.js';
const adminRouter = express.Router();

// Route to insert default admin
adminRouter.post("/login", insertDefaultAdmin);
adminRouter.get('/logout', logout);
// Update admin profile
adminRouter.put('/update', authMiddleware,uploadImage, updateAdminProfile)

adminRouter.get('/profile', authMiddleware, getAdminProfile);

export default adminRouter;