const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

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

// Route to get products by category
app.get('/products/:category', (req, res) => {
    const category = req.params.category;
    const type = req.query.type || ''; // Optional type parameter
    let query = 'SELECT * FROM product WHERE category = ?';
    let queryParams = [category];

    if (type) {
        query += ' AND type = ?';
        queryParams.push(type);
    }

    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
});



// Route to get a single product by ID
app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    const query = 'SELECT * FROM product WHERE ID = ?';

    db.query(query, [productId], (err, results) => {
        if (err) {
            console.error('Error fetching product:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(results[0]); 
    });
});


app.get('/search', (req, res) => {
    const query = req.query.query;
    const sql = 'SELECT * FROM product WHERE title LIKE ? OR brand LIKE ? OR details LIKE ? OR type LIKE ?';
    const searchQuery = `%${query}%`;
  
    db.query(sql, [searchQuery, searchQuery, searchQuery, searchQuery], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
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
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(data);
    });
});

// Start the server
app.listen(8081, () => {
    console.log('Server is listening on port 8081');
});