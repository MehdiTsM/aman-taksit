const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Serve static files from the 'images' directory

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

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/products/:category', (req, res) => {
    const category = req.params.category;
    const query = 'SELECT * FROM product WHERE category = ?';
    
    db.query(query, [category], (err, results) => {
        if (err) throw err;
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