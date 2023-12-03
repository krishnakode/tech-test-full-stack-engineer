const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'database',
  port: '3306',
  user: 'root',
  password: 'hipages',
  database: 'hipages'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {

    console.log('Connected to MySQL database');
  }
});

module.exports =  db;
