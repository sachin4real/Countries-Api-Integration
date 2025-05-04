import { useSelector } from 'react-redux';
import CountryCard from '../components/CountryCard';

function FavoritesPage() {
  const favorites = useSelector((state) => state.user.favorites);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">
        Favorite Countries
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-base sm:text-xl text-gray-300">
          No favorite countries yet.
        </p>
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
