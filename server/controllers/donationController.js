import Donation from '../models/donation.js';

export const createDonation = async (req, res) => {
  try {
    const { user_id, first_name, last_name, email, tx_ref, amount, currency } = req.body;

    // Check if all required fields are present
    if (!user_id || !first_name || !last_name || !email || !tx_ref || !amount || !currency) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create the donation record
    const donation = await Donation.create({ user_id, first_name, last_name, email, tx_ref, amount, currency });

    // Return the created donation
    res.status(201).json(donation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
