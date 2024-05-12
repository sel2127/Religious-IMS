
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

    // Hash the user's password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record with hashed password
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    // Return success message and user details as JSON
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

    // Find the user with the provided phone number
    const user = await User.findOne({ where: { phone } });

    // Check if user exists with the provided phone number
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return error
    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // If the provided credentials are valid, generate a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7h',
    });

    // Set the JWT token as a cookie
    res.cookie('accessToken', token, { httpOnly: true, secure: false, sameSite: 'strict' });

    // Return success message and user details as JSON
    return res.json({ message: 'Login successful', user });
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
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Error getting user info:", error);
    res.status(500).json({ message: "Server error" });
  }
};