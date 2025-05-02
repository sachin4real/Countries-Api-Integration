const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const countryRoutes = require('./routes/countryRoutes'); // Import country routes
const authRoutes = require('./routes/authRoutes'); // Import auth routes

const connectDB = require('./utils/db')

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/countries', countryRoutes); // Use country routes
app.use('/api/auth', authRoutes); // Use auth routes for user registration and login

app.use('/test', (req,res)=>{
  res.send("server up and rinning")
})
// Server setup
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

