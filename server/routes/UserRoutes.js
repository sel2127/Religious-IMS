import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getUserInfo,
} from '../controllers/usersController.js';
<<<<<<< HEAD
=======
import { isAuthenticated } from '../middlewares/authMiddleware.js';
>>>>>>> origin/maste

const router = express.Router();

router.post('/user/register', createUser);
router.post('/user/login', loginUser);
<<<<<<< HEAD
router.get('/api/userinfo', getUserById);
=======
router.get('/api/userinfo', isAuthenticated, getUserInfo);

// router.get('/api/userinfo', getUserById);
>>>>>>> origin/maste
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;




