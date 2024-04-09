import bcrypt from 'bcrypt';
import db from '../config/Database.js'; // assuming the database configuration file is in the same directory
import AdminModel from '../models/adminModel.js';

// Other controller methods...

// Method to insert default admin
export const insertDefaultAdmin = async (req, res) => {
  try {
    // Check if the default admin already exists
    const existingAdmin = await AdminModel.findOne({ where: { email: 'admin@gmail.com' } });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Default admin already exists.' });
    }

    console.log(existingAdmin)

    // Generate a hashed password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('admin', saltRounds);

    // Create the default admin record in the database    
    await AdminModel.create({
      firstname: 'admin',
      lastname: 'admin',
      email: 'admin@gmail.com',
      phone: '0011223344',
      password: hashedPassword,
      image: null,
      role: 'admin'
    });

    await db.sync(); // synchronize the model with the database

    return res.status(200).json({ message: 'Default admin inserted successfully.' });
  } catch (error) {
    console.error('Error inserting default admin:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};