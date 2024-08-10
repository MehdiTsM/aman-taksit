import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from './images/1.jpg';

function Header() {
  return (
    <header className="bg-gray-200 p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div>
        <img src={img1} alt="Logo" className="w-24 h-auto" />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8">
        <NavLink
          to="/"
          className="text-xl md:text-2xl font-semibold text-customDarkGreen hover:text-customOrange transition-colors duration-300 hover:border-b-4 border-customOrange pb-1"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className="text-xl md:text-2xl font-semibold text-customDarkGreen hover:text-customOrange transition-colors duration-300 hover:border-b-4 border-customOrange pb-1"
        >
          À propos
        </NavLink>
        <NavLink
          to="/contact"
          className="text-xl md:text-2xl font-semibold text-customDarkGreen hover:text-customOrange transition-colors duration-300 hover:border-b-4 border-customOrange pb-1"
        >
          Contact
        </NavLink>
        <NavLink
          to="/services"
          className="text-xl md:text-2xl font-semibold text-customDarkGreen hover:text-customOrange transition-colors duration-300 hover:border-b-4 border-customOrange pb-1"
        >
          Services
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
