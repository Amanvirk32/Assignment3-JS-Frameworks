// index1.js

// Step 1: Import necessary modules
const express = require('express');

// Step 2: Create an instance of Express
const app = express();

const PORT = 3000;

// Step 3: Define a route 
app.get('/', (req, res) => {
    // Step 4: Send HTML response displaying content
    res.send("<h1>My name is Abhi</h1>");
});

app.get('/about', (req, res) => {
    // Step 4: Send HTML response displaying content
    res.send("<h1>About Page</h1>");
});

app.get('/contact', (req, res) => {
    // Step 4: Send HTML response displaying content
    res.send("<h1>Contact Page</h1>");
});

// Step 5: Start the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
