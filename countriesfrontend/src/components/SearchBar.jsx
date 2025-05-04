import { useState } from "react";

const SearchBar = ({ searchTerm = "", onSearchChange = () => {} }) => {
  const [term, setTerm] = useState(searchTerm);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        value={term}
        onChange={handleInputChange}
        placeholder="Search for a country..."
        className="flex-1 px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none text-black"
      />
     <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition">
  Search
</button>

    </div>
  );
};

export default SearchBar;
