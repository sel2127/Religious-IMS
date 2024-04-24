import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from '../controllers/usersController.js';

const router = express.Router();

router.post('/user/register', createUser);
router.post('/user/login', loginUser);
router.get('/api/userinfo', getUserById);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;




