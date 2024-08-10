import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/1.jpg'; // Adjust the path according to your project structure

function Header() {
  return (
    <header className="bg-customDarkGreen p-4 md:p-6">
      <div className="flex justify-around items-center">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Mon Logo" className="w-20" />
        </NavLink>
        <nav className="flex space-x-4 md:space-x-8">
          <NavLink 
            to="/" 
            className="text-xl text-customWhite md:text-2xl relative transition-all duration-300"
            activeClassName="font-bold"
          >
            <span className="absolute left-0 bottom-0 w-full border-b-4 border-customOrange transition-all duration-300"></span>
            Accueil
          </NavLink>
          <NavLink 
            to="/a-propos" 
            className="text-xl text-customWhite md:text-2xl relative transition-all duration-300"
            activeClassName="font-bold"
          >
            <span className="absolute left-0 bottom-0 w-full border-b-4 border-customOrange transition-all duration-300"></span>
            A propos
          </NavLink>
          <NavLink 
            to="" 
            className="text-xl text-customWhite md:text-2xl relative transition-all duration-300"
            activeClassName="font-bold"
          >
            <span className="absolute left-0 bottom-0 w-full border-b-4 border-customOrange transition-all duration-300"></span>
            Simulation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;