const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
})

app.get('/', (re, req) => {
    return re.json("From Backend");
})

app.get('/users', (res, req) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen('8081', () => {
    console.log('listening');
})