import jwt, { decode } from 'jsonwebtoken';
import { AdminModel } from '../models/adminModel.js';

export const authMiddleware = async (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Missing token' });
  }

  try{
    // Verify and decode the token
    const decoded = jwt.verify(token, 'vTm32V7a8G4jS6mNpR5sU8xZ2cV5mT8j');
    req.admin = decoded.id;

    // Allow access to the route
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};