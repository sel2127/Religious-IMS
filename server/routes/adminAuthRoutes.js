const express = require('express');
const router = express.Router();
const adminAuthController = require('../controllers/adminAuthController');

router.post('/register', adminAuthController.registerAdmin);
// Define other routes for login, updateProfile, etc.

module.exports = router;
