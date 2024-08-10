import React, { useState, useRef, useEffect } from 'react';
import { Container } from '@mui/material';
import SearchBar from './SearchBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';




function SearchBarCont() {
  const [showCategories, setShowCategories] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const categoriesRef = useRef(null);
  const buttonRef = useRef(null);
  const resultsRef = useRef(null); // Reference for search results container

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  const toggleResults = () => {
    setShowResults((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        resultsRef.current &&
        !resultsRef.current.contains(event.target)
      ) {
        setShowCategories(false);
        setShowResults(false); // Hide results when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async (query) => {
    try {
      setSearchPerformed(true);
      const response = await axios.get(`http://localhost:8081/search?query=${query}`);
      setProducts(response.data);
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <div className='mt-10 bg-customOrange p-2'>
        <Container>
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
            <div
              ref={buttonRef}
              className="relative flex-shrink-0 flex items-center hover:bg-white hover:text-customGreen transition border-2 rounded-xl p-2 cursor-pointer mb-2 md:mb-0"
              onClick={toggleCategories}
            >
              <h1 className="md:text-xl text-xl font-medium">Catégories</h1>
              <ArrowDropDownIcon className="top-1 relative" />
              {showCategories && (
                <div
                  ref={categoriesRef}
                  className="absolute left-0 top-full mt-2 w-48 border-2 rounded-xl p-4 bg-white shadow-lg z-10 transition-all duration-300"
                >
                  <h2 className="text-lg text-customDarkGreen font-semibold">Catégories</h2>
                  <br />
                  <hr />
                  <br />
                  <ul className="text-customOrange text-lg font-medium flex flex-col">
                    <NavLink to='/category/Electroménager'>
                      <li className="hover:text-customGreen cursor-pointer transition mb-2">Electroménager</li>
                    </NavLink>
                    <NavLink to='/category/Smart phone'>
                      <li className="hover:text-customGreen cursor-pointer transition mb-2">Smart Phone</li>
                    </NavLink>
                    <NavLink to='/category/Informatique'>
                      <li className="hover:text-customGreen cursor-pointer transition mb-2">Informatique</li>
                    </NavLink>
                    <NavLink to='/category/Motocycle'>
                      <li className="hover:text-customGreen cursor-pointer transition mb-2">Motocycle</li>
                    </NavLink>
                    <NavLink to='/category/Meubles'>
                      <li className="hover:text-customGreen cursor-pointer transition mb-2">Meubles</li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex-grow w-full md:w-auto">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </Container>
      </div>
      {showResults && (
        <div ref={resultsRef} className="relative">
            

          <div className="container mx-auto p-4 bg-gradient-to-b from-customOrange to-customWhite">
            <div className="overflow-y-auto max-h-80 mt-4">
              <div className="flex flex-col">
                <CloseIcon
                  className="bg-red-500 text-white rounded-full bottom cursor-pointer hover:bg-red-600 sticky"
                  onClick={() => setShowResults(false)}
                />
                {searchPerformed && products.length === 0 && <p>No products found</p>}
                {products.map(product => (
                  <div key={product.ID} className="flex items-start border rounded-lg shadow-lg bg-customWhite p-4 mb-2 hover:border-customOrange hover:border-2 transition-all duration-300">
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
      )}
    </div>
  );
}

export default SearchBarCont;