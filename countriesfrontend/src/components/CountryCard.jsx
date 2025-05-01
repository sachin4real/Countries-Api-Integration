import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  const languages = country.languages ? Object.values(country.languages).join(", ") : "N/A";
  const flag = country.flags?.png || "/path/to/fallback/image.png"; // Fallback flag image if not available

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl w-full sm:w-80 p-4 hover:bg-green-50">
      {/* Flag Image */}
      <img
        src={flag}
        alt={`Flag of ${country.name.common}`}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      
      <div className="p-4 space-y-2">
        {/* Country Name with Link to Country Page */}
        <h2 className="text-xl font-semibold text-gray-800 hover:text-teal-600 transition-all">
          <Link to={`/country/${country.name.common}`}>
            {country.name.common}
          </Link>
        </h2>

        {/* Country Details */}
        <p className="text-gray-600">Capital: {country.capital || "N/A"}</p>
        <p className="text-gray-600">Region: {country.region || "N/A"}</p>
        <p className="text-gray-600">Population: {country.population?.toLocaleString() || "N/A"}</p>
        <p className="text-gray-600">Languages: {languages}</p>
      </div>
    </div>
  );
}

export default CountryCard;
