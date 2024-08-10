import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import CategoriesPages from './CategoriesPages';
import { NavLink } from 'react-router-dom';

function Home() {






  return (
    <div className="animate-fadeInUp">
      
      <div className="bg-gray-200">
        <Carousel />
      </div>

      <div className="bg-customOrange flex flex-col md:flex-row justify-center p-4 md:p-6 items-center">
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8">
          <h1 className="transition text-xl md:text-2xl mr-4 hover:text-customWhite">Dossier à fournir</h1>
          <h1 className="transition text-xl md:text-2xl mr-4 hover:text-customWhite">Boutique</h1>
          <NavLink to="/Assistance">
            <h1 className="transition text-xl md:text-2xl ml-4 hover:text-customWhite">Assistance par téléphone</h1>
          </NavLink>
        </div>
      </div>

      <div className="mx-4 md:mx-16 my-8">
        <CategoriesPages />








      </div>
    </div>
  );
}

export default Home;