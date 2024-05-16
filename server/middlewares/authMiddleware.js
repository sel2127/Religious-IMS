import jwt, { decode } from 'jsonwebtoken';
import { AdminModel } from '../models/adminModel.js';
import Users from '../models/Users.js';

export const authMiddleware = async (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Missing token' });
  }

  try {
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



export function isAuthenticated(req, res, next) {
  let token;
  if (req.cookies.accessToken) {
    token = req.cookies.accessToken
    //  console.log("middleware",token)
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("dec", decoded.userId)
    const uid = decoded.userId
    const users = Users.findOne({ where: { id: uid } });
   
    if (!users) {
      return res.status(404).json({
        success: false,
        message: "User does not exist", 
      });
    }
    

    next();// Allow access to the route
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Server error!", error: error.message });
  }
}
