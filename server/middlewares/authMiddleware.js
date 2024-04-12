import jwt from 'jsonwebtoken';
import { AdminModel } from '../models/adminModel.js';

export const authMiddleware = async (req, res, next) => {
  try{
    // Get the token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    // Verify and decode the token
    const decoded = jwt.verify(token, 'vTm32V7a8G4jS6mNpR5sU8xZ2cV5mT8j');

    // Find the admin by id
    const admin = await AdminModel.findByPk(decoded.id);

    if (!admin) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    // Add the admin to the request object
    req.admin = admin;

    // Allow access to the route
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};