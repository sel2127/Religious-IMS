// server/routes/exampleRoutes.js

const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Define routes
router.get('/', exampleController.getExamples);
router.post('/', exampleController.createExample);

// Other routes as needed...

module.exports = router;
