import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryPage() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        setCountry(response.data[0]);
        setError(null);
      })
      .catch(() => {
        setError('Country not found');
        setCountry(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [countryName]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Loading country details...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">{error}</h2>
      </div>
    );
  }

  if (!country) return <div className="text-center mt-10 text-lg text-white">No data available.</div>;

  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  const currencies = country.currencies ? Object.values(country.currencies).map(curr => curr.name).join(', ') : 'N/A';
  const borders = country.borders ? country.borders.join(', ') : 'None';
  const timezones = country.timezones ? country.timezones.join(', ') : 'N/A';
  const maps = country.maps?.googleMaps || '#';

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white flex flex-col items-center px-4 py-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center drop-shadow-md">{country.name.common}</h2>

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="w-full max-w-xs h-auto mb-6 border-4 border-white shadow-lg rounded"
      />

      <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-3xl text-sm sm:text-base">
        <p className="mb-2"><strong>Capital:</strong> {country.capital || 'N/A'}</p>
        <p className="mb-2"><strong>Region:</strong> {country.region}</p>
        <p className="mb-2"><strong>Subregion:</strong> {country.subregion || 'N/A'}</p>
        <p className="mb-2"><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p className="mb-2"><strong>Languages:</strong> {languages}</p>
        <p className="mb-2"><strong>Currencies:</strong> {currencies}</p>
        <p className="mb-2"><strong>Borders:</strong> {borders}</p>
        <p className="mb-2"><strong>Timezones:</strong> {timezones}</p>
        <p className="mb-4">
          <strong>Maps:</strong>{' '}
          <a href={maps} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            View on Google Maps
          </a>
        </p>
        <p><strong>Coat of Arms:</strong></p>
        {country.coatOfArms?.png && (
          <img src={country.coatOfArms.png} alt={`Coat of Arms of ${country.name.common}`} className="w-32 sm:w-40 mt-2" />
        )}
      </div>
    </div>
  );
}

export default CountryPage;
