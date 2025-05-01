const express = require('express');
const cors = require('cors');
const countryRoutes = require('./routes/countryRoutes'); // Import routes

const app = express();
app.use(cors());
app.use(express.json());

// Use the country routes
app.use('/api/countries', countryRoutes);

// Server setup
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
