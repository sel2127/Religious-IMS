import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {AdminModel} from '../models/adminModel.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import multer from 'multer';

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

export const getAdminProfile = async (req, res) => {
  try {
    const adminId = req.admin;
    const admin = await AdminModel.findByPk(adminId, {
      attributes: ['firstname', 'lastname', 'email', 'phone', 'role', 'image']
    });
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    // Return the admin profile
    // res.json({
    //   firstname: admin.firstname,
    //   lastname: admin.lastname,
    //   role: admin.role,
    //   image: admin.image,
    // });
    return res.status(200).json(admin);
  } catch (error) {
    console.error('Error fetching admin profile:', error);
    res.status(500).json({ error: 'Server error' })
  }
};

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/assets/'); // Set the destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = file.mimetype.split('/')[1];
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension); // Set the filename for the uploaded image
  },
});

const upload = multer({ storage: storage });

export const updateAdminProfile = async (req, res) => {
  try {
    const adminId = req.admin;
    const { firstname, lastname, email, phone, currentPassword, password, confirmPassword } = req.body;

    // Update the admin profile in the database
    const admin = await AdminModel.findByPk(adminId);
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    
    // Check if the current password is correct
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, admin.password);
    if (!isCurrentPasswordValid){
      return res.status(401).json({ error: 'Invalid current password' });
    }
    // Update the admin profile fields
    admin.firstname = firstname;
    admin.lastname = lastname;
    admin.email = email;
    admin.phone = phone;

    // Update password if provided
    if (password && (password !== '')) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      admin.password = hashedPassword;
    }

    // Update image if provided
    if (req.file) {
      admin.image = req.file.filename;
    }

    await admin.save(); // Save the updated admin profile
    res.status(200).json({ success: true, message: 'Admin profile updated successfully' });
    // res.status(500).json({ success: false, message: 'Error updating admin profile' });
  } catch (error) {
    console.error('Error updating admin profile:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const uploadImage = upload.single('image');





