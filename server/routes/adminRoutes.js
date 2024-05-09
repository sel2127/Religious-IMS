import express from 'express';
import {
    insertDefaultAdmin,
    logout,
    updateAdminProfile,
    uploadImage,
    getAdminProfile,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } from '../controllers/adminController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
// import { forgot } from '../controllers/adminController.js';

const adminRouter = express.Router();

adminRouter.get("/admin", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });

// Route to insert default admin
adminRouter.post("/login", insertDefaultAdmin);
adminRouter.get('/logout', logout);
// Update admin profile
adminRouter.put('/update', authMiddleware,uploadImage, updateAdminProfile)

adminRouter.get('/profile', authMiddleware, getAdminProfile);

adminRouter.get('/users', getUsers);
adminRouter.post('/users', createUser);
adminRouter.get('/users/:id', getUserById);
adminRouter.put('/users/:id', updateUser);
adminRouter.delete('/users/:id', deleteUser);

// adminRouter.get('/forgot', forgot);
export default adminRouter;