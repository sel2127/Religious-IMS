import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {AdminModel} from '../models/adminModel.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import multer from 'multer';
import Users from "../models/Users.js";

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

    // Token-based authentication
    const token = jwt.sign({ id: admin.id}, 'vTm32V7a8G4jS6mNpR5sU8xZ2cV5mT8j', { expiresIn: '1h' });

    // Return the token to the client
    res.cookie('admin_token', token, {
      httpOnly: true,
    });
    res.json({ success: true, message: 'Login Successful', token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
};

// Logout
export const logout = (req, res) => {
  // Clear the cookie
  res.clearCookie('admin_token', {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict'
  });
  
  // res.redirect('/admin/login');
  res.json({ success: true, message: 'Logout successful' });  
};

// export const getAdminProfile = async (req, res) => {
//   try {
//     const adminId = req.admin.id;
//     const admin = await AdminModel.findByPk(adminId, {
//       attributes: ['firstname', 'lastname', 'email', 'phone', 'role', 'image']
//     });
//     if (!admin) {
//       return res.status(404).json({ error: 'Admin not found' });
//     }

//     // Return the admin profile
//     // res.json({
//     //   firstname: admin.firstname,
//     //   lastname: admin.lastname,
//     //   role: admin.role,
//     //   image: admin.image,
//     // });
//     return res.status(200).json(admin);
//   } catch (error) {
//     console.error('Error fetching admin profile:', error);
//     res.status(500).json({ error: 'Server error' })
//   }
// };

// adminController.js

export const getAdminProfile = async (req, res) => {
  try {
    // Assuming the decoded token contains the admin ID
    const adminId = req.admin.id;

    // Retrieve the admin profile from the database based on the admin ID
    const admin = await AdminModel.findByPk(adminId);

    if (!admin) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    res.json(admin);
  } catch (error) {
    console.error('Error fetching admin profile:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
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
    const { firstname, lastname, email, phone, currentPassword, password, confirmPassword } = req.body;

    // Get the admin ID from the authenticated cookie
    // const adminId = req.cookies.admin;
    const adminId = req.admin.id;

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

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createUser = (req, res) => {
    
}

export const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user data based on req.body
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.phone = req.body.phone;
    user.email = req.body.email;

    // Save the updated user
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user
    await user.destroy();

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};