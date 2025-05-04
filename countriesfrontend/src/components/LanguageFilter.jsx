// components/LanguageFilter.js
import React from 'react';

const LanguageFilter = ({ languages, languageFilter, setLanguageFilter }) => (
  <select
    className="px-4 py-2 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
    value={languageFilter}
    onChange={(e) => setLanguageFilter(e.target.value)}
  >
    <option value="">All Languages</option>
    {languages.map((lang, index) => (
      <option key={index} value={lang.toLowerCase()}>{lang}</option>
    ))}
  </select>
);

export default LanguageFilter;
