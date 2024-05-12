import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getUserInfo,
  updatePassword,
  logoutUser,
} from '../controllers/usersController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/user/register', createUser);
router.post('/user/login', loginUser);
router.post('/user/logout', logoutUser); // This route doesn't seem to need authentication

// Routes that require authentication
router.get('/api/userinfo', isAuthenticated, getUserInfo);
router.post('/api/updatepassword', isAuthenticated, updatePassword);
router.put('/api/updateprofile', isAuthenticated, updateUser);

// Admin routes or other specific routes
router.get('/users', getUsers); // Admin route
router.get('/users/:id', getUserById); // Admin route
router.patch('/users/:id', updateUser); // Admin route
router.delete('/users/:id', deleteUser); // Admin route

export default router;
