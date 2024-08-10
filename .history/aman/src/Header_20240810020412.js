import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/1.jpg';

function Header() {
  return (
    <header className="bg-customOrange p-4 md:px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>
      <nav className="flex space-x-8">
        <NavLink
          to="/dashboard"
          className="transition text-xl md:text-2xl text-customWhite relative pb-1"
          activeClassName="border-b-4 border-customOrange"
          style={({ isActive }) => ({
            borderBottom: isActive ? '4px solid #f37b3b' : 'none',
          })}
        >
          Tableau de bord
        </NavLink>
        <NavLink
          to="/produits"
          className="transition text-xl md:text-2xl text-customWhite relative pb-1"
          activeClassName="border-b-4 border-customOrange"
          style={({ isActive }) => ({
            borderBottom: isActive ? '4px solid #f37b3b' : 'none',
          })}
        >
          Produits
        </NavLink>
        <NavLink
          to="/commandes"
          className="transition text-xl md:text-2xl text-customWhite relative pb-1"
          activeClassName="border-b-4 border-customOrange"
          style={({ isActive }) => ({
            borderBottom: isActive ? '4px solid #f37b3b' : 'none',
          })}
        >
          Commandes
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;