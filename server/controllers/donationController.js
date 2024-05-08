import Donation from '../models/donation.js';
import jwt from 'jsonwebtoken';

export const createDonation = async (req, res) => {
  try {
    const { first_name, last_name, email, tx_ref, amount, currency } = req.body;

    // Validate input fields
    if (!first_name || !last_name || !email || !tx_ref || !amount || !currency) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if tx_ref is unique
    const existingDonation = await Donation.findOne({ where: { tx_ref } });
    if (existingDonation) {
      return res.status(400).json({ message: 'tx_ref must be unique' });
    }

    // Extract user ID from decoded token
    const token = req.cookies.accessToken;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user_id = decoded.userId;

    // Create the donation record
    const donation = await Donation.create({ user_id, first_name, last_name, email, tx_ref, amount, currency });

    // Return success response with donation status
    res.status(201).json({ message: 'Donation created successfully', donation });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create donation', error: error.message });
  }
};
 
// get all donations 
export const getAllDonation = [
  //isAuthenticated,
  async (req, res) => {
    try {
      const donation = await Donation.findAll();
      return res.json(donation);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
];