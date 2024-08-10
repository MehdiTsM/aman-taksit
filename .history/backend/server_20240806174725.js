const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'aman',
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
    console.log('Connected to database');
});

// Fetch products from the database
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (error, results) => {
        if (error) {
            console.error('Database query failed:', error);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
});

// Root route for testing
app.get('/', (req, res) => {
    res.json('From backend side');
});

// Fetch users from the database
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Database query failed:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(data);
    });
});

// Admin login
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Received login request:', { username, password }); // Debug log

    const sql = 'SELECT * FROM admins WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error('Database query failed:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }

        console.log('Query results:', results); // Debug log

        if (results.length > 0) {
            const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});


app.post('/api/products', (req, res) => {
    const { name, description, price, image } = req.body;
    const sql = 'INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, description, price, image], (err, result) => {
      if (err) {
        console.error('Error inserting product:', err);
        return res.status(500).json({ error: 'Failed to add product' });
      }
      res.status(201).json({ message: 'Product added successfully', id: result.insertId });
    });
  });



  app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        console.error('Error deleting product:', err);
        return res.status(500).json({ error: 'Error deleting product' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    });
  });




// Start the server
const PORT = process.env.PORT || 8081; // Changed from 8081 to 8082
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});