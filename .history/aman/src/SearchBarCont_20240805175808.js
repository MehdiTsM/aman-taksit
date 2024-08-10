import React, { useState, useRef, useEffect } from 'react';
import { Container } from '@mui/material';
import SearchBar from './SearchBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';


function SearchBarCont() {

    const [showCategories, setShowCategories] = useState(false);
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

    const handleSearch = (query) => {
        console.log('Search query:', query);
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
                        <h1 className="md:text-xl">Catégories</h1>
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
    </div>
  )
}

export default SearchBarCont