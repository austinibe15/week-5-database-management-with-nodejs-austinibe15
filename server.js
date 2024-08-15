const express = require('express');
const app = express();

const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');



app.use(express.json());
app.use(cors());
dotenv.config();

//connect to db
const connection = mysql.createConnection ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

//check connection
connection.connect((err)=>{
  if(err) return console.log(err);
  console.log('Database connected successfully.');

  connection.query('CREATE DATABASE IF NOT EXIST plp_users', (err, result) => {
  if(err) return console.log(err);
  console.log('Database: plp_users successfully created.');
  });

  connection.query('USE plp_users', (err, result) => {
    if(err) return console.log(err);
    console.log('Database changed.');
  });

  const userTableQuery = `CREATE TABLE IF NOT EXISTS users {
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
  }`;

  connection.query(userTableQuery, (err, result) => {
    if (err) return console.log(err);
    console.log('Users table successfully created');
  });

});

// User registration route  
app.post('/api/register', async (req, res) => {  
  try {  
    const users = 'SELECT * FROM users WHERE email = ?'  
    // Check if user exists  
    db.query(users, [req.body.email], (err, data) => {    
      if (err) return res.status(500).json("Internal Server Error");  // Added error handling for database query  

      // If we find user with the same email in the database  
      if (data.length > 0) return res.status(409).json("User already exists");  

      // If we don't find user email in the database  
      // Hash password (encryption)  
      const salt = bcrypt.genSaltSync(10)  
      const hashedPassword = bcrypt.hashSync(req.body.password, salt)  

      // Query to create new user  
      const newUser = 'INSERT INTO users(email, username, password) VALUES (?, ?, ?)'  // Changed the placeholders to match the number of values  
      const values = [req.body.email, req.body.username, hashedPassword];  // Fixed the variable declaration for values  

      db.query(newUser, values, (err, result) => {  // Used 'result' to capture response instead of 'data' to avoid confusion  
        if (err) return res.status(400).json("Something went wrong")  

        return res.status(201).json("User created successfully")  
      })  
    });  
  } catch (err) {  
    res.status(500).json("Internal Server Error") ;
     
  }  
});

app.listen(3306, ()=>{
  console.log('Server is running on port 3306.');
});
