const  AdminAuth = require('../models/adminauth');

const adminAuthController = {
  registerAdmin: async (req, res) => {
    try {
      // Logic to create a new admin
      const newAdmin = await AdminAuth.create(req.body);
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Other controller methods like login, updateProfile, etc.
};

module.exports = adminAuthController;
