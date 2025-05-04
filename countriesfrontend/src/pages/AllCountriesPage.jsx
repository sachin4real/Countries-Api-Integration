import { useState, useEffect } from 'react';
import axios from 'axios';  // Importing Axios
import CountryCard from '../components/CountryCard';

function AllCountriesPage() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [languages, setLanguages] = useState([]);  // Store the list of languages

  useEffect(() => {
    // Fetch all countries directly from REST Countries API
    axios.get('https://restcountries.com/v3.1/all')  // REST Countries API endpoint
      .then((response) => {
        setCountries(response.data);  // Set the countries in the state
        setFilteredCountries(response.data); // Initialize filtered countries list

        // Extract and store all unique languages from the countries
        const allLanguages = new Set();
        response.data.forEach(country => {
          if (country.languages) {
            Object.values(country.languages).forEach(lang => allLanguages.add(lang));
          }
        });

        // Convert Set to an array and sort it alphabetically
        setLanguages(Array.from(allLanguages).sort());
      })
      .catch((err) => {
        setError('Failed to load countries');  // Set error if API call fails
        console.error(err);
      });
  }, []);  // Empty dependency array to only run on component mount

  // Filter countries based on search term, region, and language
  useEffect(() => {
    let filtered = countries;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by region
    if (regionFilter) {
      filtered = filtered.filter((country) =>
        country.region.toLowerCase() === regionFilter.toLowerCase()
      );
    }

    // Filter by language
    if (languageFilter) {
      filtered = filtered.filter((country) =>
        country.languages && Object.values(country.languages).some(language =>
          language.toLowerCase().includes(languageFilter.toLowerCase())
        )
      );
    }

    setFilteredCountries(filtered);  // Update the filtered countries
  }, [searchTerm, regionFilter, languageFilter, countries]);  // Re-run filtering when any of the filters change

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to right, #1B5D4C, #5B7F72)' }}>
      <h1 className="text-5xl font-extrabold text-white text-center mb-12">Explore All Countries</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by country name..."
          className="px-4 py-2 w-1/3 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-6 mb-6">
        <select
          className="px-4 py-2 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          className="px-4 py-2 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
        >
          <option value="">All Languages</option>
          {/* Dynamically generated language options */}
          {languages.map((lang, index) => (
            <option key={index} value={lang.toLowerCase()}>{lang}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-10 lg:px-16">
        {filteredCountries.map((country) => (
          <div key={country.cca3} className="flex justify-center">
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCountriesPage;
