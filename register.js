const express = require('express');  
const app = express();  
const port = 3306;  
const registerRouter = require('./register'); // Import the register router  

// Middleware to parse JSON bodies  
app.use(express.json());  

// Use the register router for routes starting with /api  
app.use('/api', registerRouter);  

// Example of other routes (if needed)  
app.get('/', (req, res) => {  
    res.send('Welcome to the server!');  
});  

// Start the server  
app.listen(port, () => {  
    console.log(`Server running at http://localhost:${port}/`);  
});