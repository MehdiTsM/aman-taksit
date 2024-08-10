import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        className="border border-gray-300 rounded-l-lg p-2 w-full"
      />
      <button type="submit" className="bg-customGreen text-white rounded-r-lg px-4 py-2">
        Search
      </button>
    </form>
  );
}

export default SearchBar;