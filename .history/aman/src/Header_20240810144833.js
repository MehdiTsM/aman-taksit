import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/1.jpg'; 

function Header() {
  return (
    <header className="bg-customDarkGreen p-4 md:p-8 h-auto md:h-20 animate-fadeInUp font-medium">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Mon Logo" className="w-16 md:w-20" />
        </NavLink>
        <nav className="flex flex-col md:flex-row md:space-x-8 items-center space-y-4 md:space-y-0">
          <NavLink 
            to="/" 
            className="text-lg md:text-xl text-customWhite relative border-b-2 border-transparent hover:text-customOrange transition-colors duration-300 hover:border-customOrange pb-2 md:pb-6"
            activeClassName="font-bold"
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/a-propos" 
            className="text-lg md:text-xl text-customWhite relative border-b-2 border-transparent hover:text-customOrange transition-colors duration-300 hover:border-customOrange pb-2 md:pb-6"
            activeClassName="font-bold"
          >
            À propos
          </NavLink>
          <NavLink 
            to="/simulation" 
            className="text-lg md:text-xl text-customWhite relative border-b-2 border-transparent hover:text-customOrange transition-colors duration-300 hover:border-customOrange pb-2 md:pb-6"
            activeClassName="font-bold"
          >
            Simulation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
