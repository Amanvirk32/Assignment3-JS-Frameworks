// index22.js

// Step 1: Import necessary modules
const express = require('express');
const fs = require('fs');

// Step 2: Create an instance of Express
const app = express();

// Step 3: Read the JSON file
const jsonData = JSON.parse(fs.readFileSync('./Data/objects.json', 'utf-8'));

// Step 4: Define a route to display JSON contents
app.get('/data', (req, res) => {
    // Step 5: Send JSON data
    res.json(jsonData);
});

// Step 6: Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
