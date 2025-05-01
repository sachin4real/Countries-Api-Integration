const axios = require('axios');

// API base URL for REST Countries
const API_URL = 'https://restcountries.com/v3.1';

// Controller to get all countries
const getAllCountries = async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    res.status(200).json(response.data); // Send the data to the frontend
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries' });
  }
};

// Controller to search for a country by name
const getCountryByName = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`${API_URL}/name/${name}?fullText=true`);
    if (response.data.length === 0) {
      return res.status(404).json({ message: 'Country not found' });
    }
    res.status(200).json(response.data); // Send the data to the frontend
  } catch (error) {
    res.status(500).json({ message: 'Error fetching country' });
  }
};

module.exports = {
  getAllCountries,
  getCountryByName
};
