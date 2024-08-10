server.js


const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'aman',
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// Fetch products from the database
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (error, results) => {
        if (error) return res.status(500).json({ error: 'Database query failed' });
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
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(data);
    });
});

// Start the server
app.listen(8081, () => {
    console.log('Server is listening on port 8081');
});