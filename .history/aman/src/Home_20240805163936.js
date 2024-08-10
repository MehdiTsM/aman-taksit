import React, { useState, useRef, useEffect } from 'react';
import Carousel from './Carousel';
import { Container } from '@mui/material';
import SearchBar from './SearchBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CategoriesPages from './CategoriesPages';

function Home() {
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
    <div className='animate-fadeInUp'>
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
                  <ul className="space-y-6 text-sm text-customOrange">
                    <li className="hover:text-customGreen cursor-pointer transition">Electroménager</li>
                    <li className="hover:text-customGreen cursor-pointer transition">Smart Phone</li>
                    <li className="hover:text-customGreen cursor-pointer transition">Informatique</li>
                    <li className="hover:text-customGreen cursor-pointer transition">Informatique</li>
                    <li className="hover:text-customGreen cursor-pointer transition">Informatique</li>
                    <li className="hover:text-customGreen cursor-pointer transition">Informatique</li>
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

      <div className='bg-gray-200'>
        <Carousel />
      </div>

      <div className='w-full bg-customOrange flex justify-center p-6 items-center'>
        <div className='flex space-x-8'>
          <h1 className='transition text-2xl mr-4 hover:text-customWhite'>Dossier à fournir</h1>
          <h1 className='hover:text-customWhite transition text-2xl mr-4'>Boutique</h1>
          <h1 className='hover:text-customWhite transition text-2xl ml-4'>Assistance par téléphone</h1>
        </div>
      </div>

      <div className='m-16'>
        <CategoriesPages />
      </div>
    </div>
  );
}

export default Home;