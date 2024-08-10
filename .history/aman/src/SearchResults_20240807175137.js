import React, { useState } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

function SearchResults() {
  const [products, setProducts] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8081/search?query=${query}`);
      setProducts(response.data);
      setSearchPerformed(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-customOrange">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {searchPerformed && products.length === 0 && <p>No products found</p>}
          {products.map(product => (
            <div key={product.ID} className="border rounded-lg shadow-lg bg-customWhite p-4 hover:border-customOrange hover:border-2 transition-all duration-300">
              <img
                src={`http://localhost:8081/images/${product.image}`}
                alt={product.title}
                className="w-full h-52 object-cover rounded-t-lg mb-4"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-customOrange mb-2">{product.title}</h2>
                <p className="text-lg"><strong>Brand:</strong> {product.brand}</p>
                <p className="text-sm mt-2 text-gray-600"><strong>Details:</strong> {product.details}</p>
                <p className="text-lg mt-2 text-gray-600"><strong className='font-semibold'>Price:</strong> {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;