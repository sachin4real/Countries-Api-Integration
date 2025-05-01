import { useState, useEffect } from 'react';
import axios from 'axios';  // Importing Axios
import CountryCard from '../components/CountryCard';

function AllCountriesPage() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all countries using Axios
    axios.get('http://localhost:5001/api/countries/all')  // Backend API endpoint
      .then((response) => {
        setCountries(response.data);  // Set the countries in the state
      })
      .catch((err) => {
        setError('Failed to load countries');  // Set error if API call fails
        console.error(err);
      });
  }, []);  // Empty dependency array to only run on component mount

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to right, #1B5D4C, #5B7F72)' }}>
      <h1 className="text-5xl font-extrabold text-white text-center mb-12">Explore All Countries</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-10 lg:px-16">
        {countries.map((country) => (
          <div key={country.cca3} className="flex justify-center">
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCountriesPage;
