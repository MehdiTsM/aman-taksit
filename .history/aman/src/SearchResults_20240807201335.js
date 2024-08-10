import React, { forwardRef } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const SearchResults = forwardRef(({ products, setShowResults }, ref) => (
  <div ref={ref} className="relative">
    <div className="container mx-auto p-4 bg-gradient-to-b from-customOrange to-customWhite">
      <ArrowDropUpIcon
        className="bg-gray-400 text-black rounded-full cursor-pointer hover:bg-gray-500 sticky"
        onClick={() => setShowResults(false)}
      />
      <div className="overflow-y-auto max-h-80 mt-4">
        <div className="flex flex-col">
          {products.length === 0 && <p>No products found</p>}
          {products.map((product) => (
            <div
              key={product.ID}
              className="flex items-start border rounded-lg shadow-lg bg-customWhite p-4 mb-2 hover:border-customOrange hover:border-2 transition-all duration-300"
            >
              <img
                src={`http://localhost:8081/images/${product.image}`}
                alt={product.title}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-bold text-customOrange mb-2">{product.title}</h2>
                <p className="text-sm"><strong>Brand:</strong> {product.brand}</p>
                <p className="text-xs mt-2 text-gray-600"><strong>Details:</strong> {product.details}</p>
                <p className="text-sm mt-2 text-gray-600"><strong className='font-semibold'>Price:</strong> {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
));

export default SearchResults;