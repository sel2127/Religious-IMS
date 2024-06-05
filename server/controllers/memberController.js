import { isAuthenticated } from '../middlewares/authMiddleware.js';
import MemberModel from './../models/MemberModel.js';
export const createMember =[
  isAuthenticated,
   async (req, res) => {
  const { firstName, lastName, bapiname, fathername, adress, email, phone, gender } = req.body;

  // Validate incoming request data
  if (!firstName || !lastName || !bapiname || !fathername || !adress || !email || !phone) {
    return res.status(400).json({ error: 'Invalid request data' });
  }
  const userId = req.userId;

  try {
    // Check if an existing member exists
    const existingMember = await MemberModel.findOne({ where: { userId }  });
    if (existingMember) {
      return res.status(400).json({ error: 'User has already registered' });
    }

    // Create a new member
    const member = await MemberModel.create({
    userId,
    firstName,
      lastName,
      bapiname,
      fathername,
      adress,
      email,
      phone,
      gender,
    });

    // Return success response
    res.status(200).json({ message: 'Member registered successfully', member: member });
  } catch (error) {
    // Return error response
    res.status(500).json({ message: 'Error registering for member' });
  }
}
]
export const getAllMembers=[
    async(req,res)=>{
        try {
            const member=await MemberModel.findAll({
                order: [['createdAt', 'DESC']], // sort by date
                limit:5,
            });
            
            res.json(member);
        } catch (error) {
            console.error(error)
            res.json({message:"internal server error"})
        }
    }
]