import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; // <-- Add this line


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/country/${searchTerm}`);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="w-full max-w-xs mb-6">
      <input
        type="text"
        className="w-full px-4 py-2 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit" className="mt-2 w-full bg-blue-600 text-white p-2 rounded-lg">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
