// import jwt, { decode } from 'jsonwebtoken';
// import { AdminModel } from '../models/adminModel.js';

// export const authMiddleware = async (req, res, next) => {
//   // Get the token from the cookie
//   const token = req.cookies.admin_token;

//   if (!token) {
//     return res.status(401).json({ error: 'Missing token' });
//   }

//   try{
//     // Verify and decode the token
//     const decoded = jwt.verify(token.split(' '[1]), 'vTm32V7a8G4jS6mNpR5sU8xZ2cV5mT8j');
//     req.admin = decoded;

//     // Allow access to the route
//     next();
//   } catch (error) {
//     console.error('Error verifying token:', error);
//     return res.status(401).json({ error: 'Invalid token' });
//   }
// };

// authMiddleware.js

// import jwt from 'jsonwebtoken';

// export const authMiddleware = (req, res, next) => {
//   try {
//     const token = req.cookies.admin_token; // Extract the token from the 'token' cookie

//     if (!token) {
//       return res.status(401).json({ success: false, message: 'Unauthorized' });
//     }

//     const decoded = jwt.verify(token, 'vTm32V7a8G4jS6mNpR5sU8xZ2cV5mT8j'); // Verify the token

//     req.admin = decoded.admin; // Assuming the decoded token contains the admin information
//     next();
//   } catch (error) {
//     console.error('Authentication middleware error:', error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };

import jwt from 'jsonwebtoken';

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
      next();
    } catch (error) {
      console.error('Error verifying token', error);
      res.status(401).json({ message: 'Invalid Token' });
    }

};