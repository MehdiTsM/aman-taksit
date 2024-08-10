import React, { useState, useRef, useEffect } from 'react';
import { Container } from '@mui/material';
import SearchBar from './SearchBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import SearchResults from './SearchResults'; // Import the simplified component

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
    if (showResults) {
      setShowResults(false); // Hide search results when categories are toggled
    }
  };

  const handleSearch = async (query) => {
    if (query.trim() === '') {
      setProducts([]); // Clear products if query is empty
      return;
    }
    try {
      setSearchPerformed(true);
      const response = await axios.get(`http://localhost:8081/search?query=${query}`);
      setProducts(response.data);
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
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
        setShowCategories(false); // Close categories dropdown
        setShowResults(false); // Hide search results
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <SearchResults
          ref={resultsRef}
          products={products}
          setShowResults={setShowResults}
        />
      )}
    </div>
  );
}

export default SearchBarCont;