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
                <a className="pb-2 font-medium text-xl transition duration-300 hover:text-customOrange relative">
                  Accueil
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-customOrange transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/a-propos" className={({ isActive }) => (isActive ? 'text-customOrange' : '')}>
                <a className="pb-2 font-medium text-xl transition duration-300 hover:text-customOrange relative">
                  À propos
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-customOrange transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/simulation" className={({ isActive }) => (isActive ? 'text-customOrange' : '')}>
                <a className="pb-2 font-medium text-xl transition duration-300 hover:text-customOrange relative">
                  Simulation
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-customOrange transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
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