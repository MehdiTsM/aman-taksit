import React, { useState, useRef, useEffect } from 'react';
import { Container } from '@mui/material';
import SearchBar from './SearchBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function SearchBarCont() {
  const [showCategories, setShowCategories] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const categoriesRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowCategories(false);
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
      <div className="container mx-auto p-4 bg-slate-200 border-customOrange ">
        <h2 className="text-2xl font-bold text-customOrange">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {!searchPerformed && <p>Search for products to see results.</p>}
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

export default SearchBarCont;