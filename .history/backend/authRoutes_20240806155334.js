const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'aman',
});

router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    const saltRounds = 10;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert the new user into the database
        const sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
        db.query(sql, [username, hashedPassword, role || 'user'], (err, results) => {
            if (err) return res.status(500).json({ error: 'Database query failed' });
            res.status(201).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        res.status(500).json({ error: 'Password hashing failed' });
    }
});

module.exports = router;