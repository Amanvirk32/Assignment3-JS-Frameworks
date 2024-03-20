// file3.js

// Step 1: Import necessary modules
const express = require('express');

// Step 2: Create an instance of Express
const app = express();

// Step 3: Add CRUD operations demonstration routes
app.post('/create', (req, res) => {
    res.send('Create operation performed!');
});

app.put('/update', (req, res) => {
    res.send('Update operation performed!');
});

app.delete('/delete', (req, res) => {
    res.send('Delete operation performed!');
});

// Step 4: Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
