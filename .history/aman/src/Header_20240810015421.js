import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-customOrange p-4 md:p-6">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="text-customWhite text-2xl md:text-3xl font-bold transition hover:text-gray-100">
          <img />
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
            a propos
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