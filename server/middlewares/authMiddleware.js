import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';
import Feedback from '../models/FeedbackModel.js';


export const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  // const token = req.headers.authorization;

  // // Check if the token exists
  // if (!token || !token.startsWith('Bearer ')) {
  //   return res.status(401).json({ success: false, message: 'Invalid token format' });
  // }
  
  // const tokenWithoutBearer = token.split(' ')[1];

  // try {
  //   const decoded = jwt.verify(tokenWithoutBearer, 'vTm32V7a8G4jS6mNpR5sU8xZ2cV5mT8j');
    
  //   req.admin = decoded.admin;

  //   // Proceed to the next middleware or route handler
  //   next();
  // } catch (error) {
  //   console.error('Error verifying token:', error);
  //   res.status(401).json({ success: false, message: 'Invalid token' });
  // }

  const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Access Denied' });
    }
  
    try {
      const decoded = jwt.verify(token.split(' ')[1], 'vTm32V7a8G4jS6mNpR5sU8xZ2cV5mT8j');
      req.admin = decoded;
      req.adminId = decoded.id;

      
      next();
    } catch (error) {
      console.error('Error verifying token', error);
      res.status(401).json({ message: 'Invalid Token' });
    }

};

export function isAuthenticated(req, res, next) {
  let token;
  if (req.cookies.accessToken) {
    token = req.cookies.accessToken;
  } else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    req.userId = decoded.userId;
    
    const users = Users.findOne({ where: { id: decoded.userId } });
    if (!users) {
      return res.status(404).json({
        success: false,
        message: "User does not exist", 
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Server error!", error: error.message });
  }
}

export const isFeedbackCreator = async (req, res, next) => {
  const userId = req.userId;
  const feedbackId = req.params.id;

  try {
    const feedback = await Feedback.findOne({ where: { id: feedbackId } });
    if (!feedback) {
      return res.status(404).json({ success: false, message: 'Feedback not found' });
    }

    if (userId !== feedback.userId) {
      return res.status(403).json({ success: false, message: 'Unauthorized - you are not the owner of the feedback' });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error!" });
  }
};