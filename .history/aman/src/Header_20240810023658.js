import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/1.jpg'; // Adjust the path according to your project structure

function Header() {
  return (
    <header className="bg-customDarkGreen md:p-5 h-24">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="flex items-center pb-6">
          <img src={logo} alt="Mon Logo" className="w-20" />
        </NavLink>
        <nav className="flex space-x-4 md:space-x-8 items-center">
          <NavLink 
            to="/" 
            className="text-xl text-customWhite md:text-2xl relative  hover:text-customOrange transition-colors duration-300 hover:border-b-2 border-customOrange  pb-6"
            activeClassName="font-bold"
          >
            Accueil
            <span className="text-xl text-customWhite md:text-2xl relative  hover:text-customOrange transition-colors duration-300 hover:border-b-2 border-customOrange pb-6"></span>
          </NavLink>
          <NavLink 
            to="/a-propos" 
            className="text-xl text-customWhite md:text-2xl relative pb-1 hover:text-customOrange transition-colors duration-300 hover:border-b-2 border-customOrange  pb-6"
            activeClassName="font-bold"
          >
            A propos
            <span className="absolute left-0 bottom-0 w-full border-b-2 border-customOrange transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </NavLink>
          <NavLink 
            to="" 
            className="text-xl text-customWhite md:text-2xl relative pb-1 hover:text-customOrange transition-colors duration-300 hover:border-b-2 border-customOrange  pb-6"
            activeClassName="font-bold"
          >
            Simulation
            <span className="absolute left-0 bottom-0 w-full border-b-2 border-customOrange transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;