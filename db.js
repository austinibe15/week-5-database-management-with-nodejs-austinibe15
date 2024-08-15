// db.js  
const mysql = require('mysql2');  

const connection = mysql.createConnection({  
    host: 'localhost',     // Your MySQL host  
    user: 'root',          // Your MySQL username  
    password: 'yourpassword', // Your MySQL password  
    database: 'mydatabase' // Your database name  
});  

// Create connection to MySQL server  
connection.connect(err => {  
    if (err) {  
        console.error('Error connecting to MySQL:', err.stack);  
        return;  
    }  
    console.log('Connected to MySQL!');  
});  

module.exports = connection;