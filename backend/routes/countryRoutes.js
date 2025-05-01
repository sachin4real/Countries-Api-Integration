const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

// Define the routes
router.get('/all', countryController.getAllCountries);
router.get('/name/:name', countryController.getCountryByName);

module.exports = router;
