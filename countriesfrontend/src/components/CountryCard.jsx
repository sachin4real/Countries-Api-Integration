import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/userSlice';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites);  // Get favorites from Redux state
  const isFavorite = favorites.some(fav => fav.cca3 === country.cca3); // Check if the country is in favorites

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(country)); // If it's already a favorite, remove it
    } else {
      dispatch(addFavorite(country)); // Otherwise, add it to favorites
    }
  };

  const languages = country.languages ? Object.values(country.languages).join(", ") : "N/A";
  const flag = country.flags?.png || "/path/to/fallback/image.png"; // Fallback flag image if not available

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl w-full sm:w-80 p-4 hover:bg-green-50">
      {/* Beautiful Favorite Button */}
      <button
        onClick={handleFavoriteToggle}
        className={`absolute top-4 right-4 py-2 px-4 rounded-full transition duration-300 transform 
          ${isFavorite ? 'bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg' : 
            'bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-md'} 
          hover:scale-110 hover:from-teal-500 hover:to-teal-700 focus:outline-none`}
        style={{ zIndex: 10 }}
      >
        <span className="text-xl">{isFavorite ? '❤️' : '🤍'}</span> {/* Red heart if favorited, white heart if not */}
      </button>

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
        <p className="text-gray-600">
          <strong>Capital:</strong> {country.capital || "N/A"}
        </p>
        <p className="text-gray-600">
          <strong>Region:</strong> {country.region || "N/A"}
        </p>
        <p className="text-gray-600">
          <strong>Population:</strong> {country.population?.toLocaleString() || "N/A"}
        </p>
        <p className="text-gray-600">
          <strong>Languages:</strong> {languages}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
