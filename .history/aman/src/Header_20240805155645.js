import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/1.jpg'

function Header() {
  return (
    <header className="z-50 bg-customDarkGreen text-white p-4 sticky top-0 animate-fadeInUp">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative flex space-x-8 items-center">
          <img className="w-16 md:w-20" src={logo}  alt="Logo"/>
        </div>
        <div>
          <ul className="flex space-x-8 items-center">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-customOrange' : '')}>
              <a className="pb-5 border-customOrange hover:border-b-2 font-medium text-xl transition hover:text-customOrange">Accueil</a>
            </NavLink>
            <NavLink to="/a-propos" className={({ isActive }) => (isActive ? 'text-customOrange' : '')}>
              <a className="pb-5 border-customOrange hover:border-b-2 font-medium text-xl transition hover:text-customOrange">À propos</a>
            </NavLink>
            <NavLink to="/simulation" className={({ isActive }) => (isActive ? 'text-customOrange' : '')}>
              <a className="pb-5 border-customOrange hover:border-b-2 font-medium text-xl transition hover:text-customOrange">Simulation</a>
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;