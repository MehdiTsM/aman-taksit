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
      <Sear

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