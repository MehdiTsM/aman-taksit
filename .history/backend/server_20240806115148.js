const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (re, res) => {
    return res.json('')
})