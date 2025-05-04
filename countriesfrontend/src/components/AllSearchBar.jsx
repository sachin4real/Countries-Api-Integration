// components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div className="flex justify-center mb-6">
    <input
      type="text"
      placeholder="Search by country name..."
      className="px-4 py-2 w-1/3 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>
);

export default SearchBar;
