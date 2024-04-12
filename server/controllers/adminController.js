import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {AdminModel} from '../models/adminModel.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';


// Method to insert default admin
export const insertDefaultAdmin = async (req, res) => {
  // Get the email and password from the request body
  const { email, password } = req.body;
  try {
    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash('admin', saltRounds);

    // // Create the default admin record in the database    
    // await AdminModel.create({
    //   firstname: 'admin',
    //   lastname: 'admin',
    //   email: 'admin@gmail.com',
    //   phone: '0011223344',
    //   password: hashedPassword,
    //   image: null,
    //   role: 'admin'
    // });

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

// Update admin profile
export const updateAdmin = async (req, res) => {
  try{
    const { id } = req.params;
    const { firstname, lastname, email, phone, password, image } = req.body;

    // Find the admin by id
    const admin = await AdminModel.findByPk(id);

    if (!admin) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    // Hash the new password if provided
    let hashedPassword = admin.password;
    if (password) {
      const salt = await bcrypt.hash(password, salt);
    }

    // Update the admin data
    await admin.update({
      firstname,
      lastname,
      email,
      phone,
      password: hashedPassword,
      image
    });

    res.json({ success: true, message: 'Admin profile updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

export const getAdminProfile = async (req, res) => {
  try {
    const admin = await AdminModel.findByPk(req.user.id, {
      attributes: ['id', 'firstname', 'lastname', 'email', 'phone', 'image'],
    });

    if (!admin) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    res.json(admin);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};