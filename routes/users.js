const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Login endpoint
router.post('/login1', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Cari user berdasarkan username
        const user = await User.findOne({ where: { username: username } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Verifikasi password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Jika login berhasil
        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
