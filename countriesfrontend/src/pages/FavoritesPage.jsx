import { useSelector } from 'react-redux';
import CountryCard from '../components/CountryCard';

function FavoritesPage() {
  const favorites = useSelector(state => state.user.favorites);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white p-6">
      <h1 className="text-5xl font-extrabold text-white text-center mb-12">Favorite Countries</h1>

      {/* Show the countries or a message if no favorites */}
      {favorites.length === 0 ? (
        <p className="text-center text-xl text-gray-400">No favorite countries yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favorites.map((country) => (
            <div key={country.cca3} className="flex justify-center">
              <CountryCard country={country} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;

