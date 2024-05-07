
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/Users.js';

export const getUsers = (req, res) => {
  // Implement logic to get all users
};

export const getUserById = (req, res) => {
  // Implement logic to get user by ID
};

export const createUser = async (req, res) => {

  try {
    const { firstName, lastName, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User created successfully!', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.user; // Assuming user ID is retrieved from JWT
    const updates = req.body; // Updated user data

    const user = await User.findByIdAndUpdate(userId, updates, { new: true }); // Update and return updated user

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully!', user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const deleteUser = (req, res) => {
  // Implement logic to delete user
};

export const loginUser = async (req, res) => {
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

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7h',
    });
    
    

    res.cookie('accessToken', token, { httpOnly: true,
                                      secure:false,
                                      sameSite:"strict"
                                      
    });

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
  
};

export const getUserInfo = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Error getting user info:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const updatePassword = async (req, res) => {
  const { userId, newPassword } = req.body;

  try {
    console.log("Received userId:", userId);
    console.log("Received newPassword:", newPassword); // Don't log the actual password for security reasons

    // Find the user by userId
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

     // Hash the new password before updating the user
     const hashedPassword = await bcrypt.hash(newPassword, 10); // Adjust cost factor as needed
     console.log("Generated hashedPassword:", hashedPassword);

     // Update the user's password with the hashed value
     user.password = hashedPassword;
     await user.save();
 
     return res.status(200).json({ message: 'Password updated successfully' });
   } catch (error) {
     console.error(error);
     return res.status(500).json({ error: 'Internal server error' });
   }
};

export const logoutUser = async (req, res) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.clearCookie('accessToken'); // Clear the access token cookie
  res.json({ message: 'Logout successful' });
};







