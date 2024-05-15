
import jwt, { decode } from 'jsonwebtoken';
import { AdminModel } from '../models/adminModel.js';
import Users from '../models/Users.js';
import Feedback from '../models/FeedbackModel.js';

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
    // console.log("dec", decoded.userId)
    const uid = decoded.userId
    req.userId=uid;
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

// for feedback creator
export const isFeedbackCreator=async(req,res,next)=>{
  const userId=req.user.userId; // get user id form authenticated user
  const feedbackId=req.params.id;
  try {
    // find feedback by id
    const feedback = await Feedback.findOne({ where: { id: feedbackId } });
    if(!feedback){
      return res.status(404).json({ success: false, message: 'Feedback not found' });
    }
    // check it authenticated useer is creator of feedback
    if(userId !== feedback.userId){
      return res
      .status(403)
      .json({ success: false, message: 'Unauthorized - you are not the owner of the feedback' });
    
  }
    next();

  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"server error!"})
  }
};