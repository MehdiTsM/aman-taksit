const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express()
app.use(cors())


app.use('/images', express.static(path.join(__dirname, 'public/images')));


const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'aman',
})


// Connect to the database
db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to database');
  });
  
  // Fetch products from the database
  app.get('/api/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  });



app.get('/', (re, res) => {
    return res.json('From backend side')
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.listen(8081, () => {
    console.log('listening')
})