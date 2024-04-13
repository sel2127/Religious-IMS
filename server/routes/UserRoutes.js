import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/usersController.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/Users.js';

const router = express.Router();

// Register a new user
router.post('/user/register', async (req, res) => {
  try {
    const { firstName, lastName , email , phone , password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// User Login
router.post('/user/login', async (req, res) => {
    try {
      const { phone, password } = req.body;
      const user = await User.findOne({ where: { phone } });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid Credentials' });
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
  
      if (!isPasswordMatch) {
        return res.status(400).json({ message: 'Invalid Credentials' });
      }
  
      const token = jwt.sign({ userId: user.id }, '6617171', {
        expiresIn: '1h',
      });
  
      res.cookie('token', token, { httpOnly: true });
  
      res.json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  });


  // Middleware to verify the JWT token
function verifyToken(req, res, next) {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Access Denied' });
    }
  
    try {
      const decoded = jwt.verify(token.split(' ')[1], '6617171');
      req.user = decoded;
      next();
    } catch (error) {
      console.error('Error verifying token', error);
      res.status(401).json({ message: 'Invalid Token' });
    }
  }
  
  // Protected route to get user info
  router.get('/userinfo', verifyToken, async (req, res) => {
    try {
      const UserP = await User.findByPk(req.user.userId);
  
      if (!UserP) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ UserP });
    } catch (error) {
      console.error('Error fetching user info:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

//   // User logout
// router.post('/logout', (req, res) => {
//   try {
//     // Clear the token cookie
//     res.clearCookie('token');
//     res.json({ message: 'Logout successful' });
//   } catch (error) {
//     console.error('Error logging out:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// Other user routes
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;