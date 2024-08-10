import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/1.jpg';

function Header() {
  return (
    <header className="z-50 bg-customDarkGreen text-white p-4 sticky top-0 animate-fadeInUp">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="relative flex items-center space-x-4 md:space-x-8">
          <img className="w-16 md:w-20" src={logo} alt="Logo" />
        </div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'text-customOrange' : '')}>
              <a className="relative pb-5 text-xl font-medium transition hover:text-customOrange md:border-customOrange md:hover:border-b-2"> Accueil
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/a-propos" className={({ isActive }) => (isActive ? 'text-customOrange' : '')}>
                <a className="relative pb-5 text-xl font-medium transition hover:text-customOrange md:border-customOrange md:hover:border-b-2">
                  À propos
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/simulation" className={({ isActive }) => (isActive ? 'text-customOrange' : '')}>
                <a className="relative pb-5 text-xl font-medium transition hover:text-customOrange md:border-b-2 md:border-customOrange md:hover:border-none">
                  Simulation
                </a>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;