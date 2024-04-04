const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const User=require('../models/user');
const app = express();
app.use(bodyParser.json());

// User registration logic
app.post('/api/register', async (req, res) => {
    const { firstName, lastName, email, phone, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({ firstName, lastName, email, phone, password: hashedPassword });
        res.status(201).json(user);
        res.status(200).json({ message: 'register successfully' });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// User login logic  by phone number and password
app.post('/api/login', async (req, res) => {
    const { phone, password } = req.body;

    const user = await User.findOne({ where: { phone } });

    if (!user) {
        return res.status(401).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successfully' });
});

module.exports=app;