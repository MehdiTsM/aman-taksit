import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/1.jpg'; // Adjust the path according to your project structure

function Header() {
  return (
    <header className="bg-customOrange p-4 md:p-6">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Mon Logo" className="h-10 md:h-14 mr-3" />
        </NavLink>
        <nav className="flex space-x-4 md:space-x-8">
          <NavLink 
            to="/accueil" 
            className="text-xl md:text-2xl transition hover:text-gray-100"
            activeClassName="font-bold"
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/boutique" 
            className="text-xl md:text-2xl transition hover:text-gray-100"
            activeClassName="font-bold"
          >
            Boutique
          </NavLink>
          <NavLink 
            to="/assistance" 
            className="text-xl md:text-2xl transition hover:text-gray-100"
            activeClassName="font-bold"
          >
            Assistance
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;