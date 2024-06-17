const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YUdXct3@xYG7ZeE',
    database: 'crud'
})

app.get('/', (req, res) => {
    return res.json("From Backend");
})

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.post('/createUser', (req, res) => {
    const { column1, column2, column3 } = req.body;
    const query = 'INSERT INTO users (column1, column2, column3) VALUES (?, ?, ?)';
  
    connection.query(query, [column1, column2, column3], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.status(201).send('Data inserted successfully');
    });
  });

app.listen('8081', () => {
    console.log('listening');
})