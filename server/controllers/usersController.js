
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

export const updateUser = (req, res) => {
  // Implement logic to update user details
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

// export const getUserInfo = async (req, res) => {
//   try {
//     // Check if user is authenticated (middleware ensures this)
//     if (!req.user) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const user = await User.findOne({ where: { id: req.user.userId } }); // Retrieve user data

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Remove sensitive data (e.g., password hash) before sending response
//     const safeUser = { ...user, password: undefined };

//     res.status(200).json(safeUser); // Send user information
//   } catch (error) {
//     console.error('Error fetching user profile:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

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








