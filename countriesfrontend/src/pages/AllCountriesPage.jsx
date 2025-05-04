import { useState, useEffect } from 'react';
import axios from 'axios';  // Importing Axios
import SearchBar from '../components/AllSearchBar';
import RegionFilter from '../components/RegionFilter';
import LanguageFilter from '../components/LanguageFilter';
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
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);

        // Extract and store all unique languages
        const allLanguages = new Set();
        response.data.forEach(country => {
          if (country.languages) {
            Object.values(country.languages).forEach(lang => allLanguages.add(lang));
          }
        });
        setLanguages(Array.from(allLanguages).sort());
      })
      .catch((err) => {
        setError('Failed to load countries');
        console.error(err);
      });
  }, []);

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

    setFilteredCountries(filtered);
  }, [searchTerm, regionFilter, languageFilter, countries]);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white p-6">
      <div className="w-full">
        <h1 className="text-5xl font-extrabold text-white text-center mb-12">...</h1>

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {/* Filters */}
        <div className="flex justify-center space-x-6 mb-6">
          <RegionFilter regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
          <LanguageFilter languages={languages} languageFilter={languageFilter} setLanguageFilter={setLanguageFilter} />
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-10 lg:px-16">
          {filteredCountries.map((country) => (
            <div key={country.cca3} className="flex justify-center">
              <CountryCard country={country} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCountriesPage;
