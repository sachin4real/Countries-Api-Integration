import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryPage() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/countries/name/${countryName}`)  
      .then((response) => {
        if (!response.ok) {
          throw new Error('Country not found');
        }
        return response.json();
      })
      .then((data) => {
        setCountry(data[0]);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setCountry(null);
      });
  }, [countryName]);

  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!country) return <div className="text-center mt-10 text-lg">Loading...</div>;

  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  const currencies = country.currencies ? Object.values(country.currencies).map(curr => curr.name).join(', ') : 'N/A';
  const borders = country.borders ? country.borders.join(', ') : 'None';
  const timezones = country.timezones ? country.timezones.join(', ') : 'N/A';
  const maps = country.maps?.googleMaps || '#';

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white flex flex-col items-center py-10">
      <h2 className="text-5xl font-bold mb-6 drop-shadow-md">{country.name.common}</h2>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="w-64 h-auto mb-6 border-4 border-white shadow-lg rounded"
      />

      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <p className="mb-2"><strong>Capital:</strong> {country.capital || 'N/A'}</p>
        <p className="mb-2"><strong>Region:</strong> {country.region}</p>
        <p className="mb-2"><strong>Subregion:</strong> {country.subregion || 'N/A'}</p>
        <p className="mb-2"><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p className="mb-2"><strong>Languages:</strong> {languages}</p>
        <p className="mb-2"><strong>Currencies:</strong> {currencies}</p>
        <p className="mb-2"><strong>Borders:</strong> {borders}</p>
        <p className="mb-2"><strong>Timezones:</strong> {timezones}</p>
        <p className="mb-4">
          <strong>Maps:</strong> <a href={maps} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on Google Maps</a>
        </p>
        <p><strong>Coat of Arms:</strong></p>
        {country.coatOfArms?.png && (
          <img src={country.coatOfArms.png} alt={`Coat of Arms of ${country.name.common}`} className="w-40 mt-2" />
        )}
      </div>
    </div>
  );
}

export default CountryPage;
