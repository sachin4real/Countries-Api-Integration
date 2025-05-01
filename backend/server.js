const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Example of fetching data from REST Countries API
app.get('/countries', async (req, res) => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    res.json(countries); // Send the list of countries as JSON response
  } catch (err) {
    res.status(500).json({ message: 'Error fetching countries data' });
  }
});

// Start the server
const PORT = process.env.PORT || 5001; // Use the port from the .env file
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
