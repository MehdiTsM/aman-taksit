import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 bottom-0 left-0 w-full">
      <div className="container mx-auto px-0">
        <div className="flex flex-wrap justify-around">
          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 items-center flex flex-col">
            <h3 className="text-2xl font-semibold mb-3">Liens Rapides</h3>
            <ul>
              <NavLink to="/">
                <li><a className="font-bold transition hover:text-customOrange ">Accueil</a></li>
              </NavLink>
              <NavLink to="/a-propos">
                <li><a href="#" className="font-bold transition hover:text-customOrange ">À propos</a></li>
              </NavLink>
              <li><a className="font-bold transition hover:text-customOrange ">Simulation</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 items-center flex flex-col">
            <h3 className="text-2xl font-semibold mb-3">Nos réseaux sociaux</h3>
            <div className="flex space-x-4 items-center ">
              <a href="#" className="font-bold transition hover:text-customOrange "><FacebookIcon /></a>
              <a href="#" className="font-bold transition hover:text-customOrange "><FontAwesomeIcon icon={faTiktok} className="text-xl text-white hover:text-customOrange" /></a>
              <a href="#" className="font-bold transition hover:text-customOrange "><InstagramIcon /></a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 pl-10 items-center flex flex-col">
            <h3 className="text-2xl font-semibold mb-3">Contactez nous</h3>
            <p className="font-bold">Address : XXX</p>
            <p className="transition hover:text-customOrange font-bold">Email : amantaksit@gmail.com<a href="amantaksit@gmail.com" className="hover:underline"></a></p>
            <p className="transition hover:text-customOrange font-bold">Phone : <a href="">+213 7 78 90 20 67</a></p>
          </div>
        </div>
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;