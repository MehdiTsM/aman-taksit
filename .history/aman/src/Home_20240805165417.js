import React, { useState, useRef, useEffect } from 'react';
import Carousel from './Carousel';
import { Container } from '@mui/material';
import SearchBar from './SearchBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CategoriesPages from './CategoriesPages';
import SearchBarCont from './SearchBarCont';

function Home() {


  return (
    <div className='animate-fadeInUp'>
      

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