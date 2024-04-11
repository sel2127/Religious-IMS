import express from 'express';
import { insertDefaultAdmin } from '../controllers/adminController.js';
import { logout } from '../controllers/adminController.js';

const adminRouter = express.Router();

// Route to insert default admin
adminRouter.post("/", insertDefaultAdmin);
adminRouter.get('/admin/logout', logout);

export default adminRouter;