import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/1.jpg'; 

function Header() {
  return (
    <header className="bg-customDarkGreen p-4 md:p-6 h-auto md:h-20 animate-fadeInUp">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Mon Logo" className="w-16 md:w-20" />
        </NavLink>
        <nav className="flex flex-col md:flex-row md:space-x-8 items-center space-y-4 md:space-y-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg md:text-xl ${isActive ? 'text-customOrange' : 'text-customWhite'} transition-colors duration-300 pb-2 md:pb-6`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              `text-lg md:text-xl ${isActive ? 'text-customOrange' : 'text-customWhite'} transition-colors duration-300 pb-2 md:pb-6`
            }
          >
            À propos
          </NavLink>
          <NavLink
            to="/simulation"
            className={({ isActive }) =>
              `text-lg md:text-xl ${isActive ? 'text-customOrange' : 'text-customWhite'} transition-colors duration-300 pb-2 md:pb-6`
            }
          >
            Simulation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
