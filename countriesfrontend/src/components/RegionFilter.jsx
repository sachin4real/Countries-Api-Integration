// components/RegionFilter.js
import React from 'react';

const RegionFilter = ({ regionFilter, setRegionFilter }) => (
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
);

export default RegionFilter;
