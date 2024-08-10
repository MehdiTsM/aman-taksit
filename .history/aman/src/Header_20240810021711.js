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
            className="hover:border-b-2  text-xl text-customWhite md:text-2xl transition hover:text-customOrange"
            activeClassName="font-bold"
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/a-propos" 
            className="text-xl text-customWhite md:text-2xl transition hover:text-customOrange"
            activeClassName="font-bold"
          >
            A propos
          </NavLink>
          <NavLink 
            to="" 
            className="text-xl text-customWhite md:text-2xl transition hover:text-customOrange"
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