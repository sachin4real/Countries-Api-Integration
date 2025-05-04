// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component
import HomePage from './pages/HomePage'; // Import HomePage component
import LoginPage from './pages/LoginPage'; // Import LoginPage component
import RegisterPage from './pages/RegisterPage'; // Import RegisterPage component
import AllCountriesPage from './pages/AllCountriesPage'; // Import AllCountriesPage component
import CountryPage from './pages/CountryPage'; // Import CountryPage component
import ProfilePage from './pages/ProfilePage'; // Import ProfilePage component
import ErrorPage from './components/ErrorPage'; // Fallback for unmatched routes
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-10"> 
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Login page route */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Register page route */}
        <Route path="/register" element={<RegisterPage />} />
        
        {/* All countries page route */}
        <Route path="/all-countries" element={<AllCountriesPage />} />
        
        {/* Country detail page route */}
        <Route path="/country/:countryName" element={<CountryPage />} />

        <Route path="/favorites" element={<FavoritesPage />} /> {/* Add Favorites Route */}
        
        {/* Profile page route */}
        <Route path="/profile" element={<ProfilePage />} />
        
        {/* Fallback page for unmatched routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
