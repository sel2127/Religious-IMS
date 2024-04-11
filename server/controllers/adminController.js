import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {AdminModel} from '../models/adminModel.js';

// Method to insert default admin
export const insertDefaultAdmin = async (req, res) => {
  // Get the email and password from the request body
  const { email, password } = req.body;
  try {
    // Check if the email exists in the database
    const admin = await AdminModel.findOne({ where: { email } });
    if (!admin) {
      return res.json({ success: false, message: 'Invalid credentials' });
    }

    // Compare the password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.json({ success: false, message: 'Invalid credentials' });
    }

    // Session-based authentication
    req.session.user = admin;

    // Token-based authentication
    const token = jwt.sign({ id: admin.id}, 'vTm32V7a8G4jS6mNpR5sU8xZ2cV5mT8j', { expiresIn: '1h' });

    // Return the token to the client
    res.json({ success: true, token })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
};

// Logout
export const logout = (req, res) => {
  // Clear the session
  req.session.destroy((err) => {
    if (err) {
      console.error('Error logging out:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    // Redirect to the login page
    res.redirect('/admin/login');
  });
};