const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const mysql = require('mysql');

const router = express.Router();

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
  database: 'aman',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Register
router.post('/register', [
  body('name').isLength({ min: 1 }).withMessage('Name is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (name, password) VALUES (?, ?)', [name, hashedPassword], (err, result) => {
      if (err) throw err;
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
router.post('/login', [
  body('name').isLength({ min: 1 }).withMessage('Name is required'),
  body('password').isLength({ min: 1 }).withMessage('Password is required'),
], (req, res) => {
  const { name, password } = req.body;

  db.query('SELECT * FROM users WHERE name = ?', [name], async (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, name: user.name }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  });
});

module.exports = router;