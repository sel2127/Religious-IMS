import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, 'vTm32V7a8G4jS6mNpR5sU8xZ2cV5mT8j');

    // Set the decoded token on the request object
    req.user = decoded;

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};