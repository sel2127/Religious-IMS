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

router.post('/user/register', createUser);
router.post('/user/login', loginUser);
router.get('/api/userinfo', isAuthenticated, getUserInfo);
router.post('/user/logout', logoutUser);
router.post('/api/updatepassword' , updatePassword );

router.put('/api/updateprofile', isAuthenticated , updateUser);


// router.get('/api/userinfo', getUserById);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
// router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;




