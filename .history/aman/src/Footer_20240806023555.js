import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:items-start space-y-8 md:flex-row md:space-y-0 md:space-x-8 justify-around">
          
          {/* Quick Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="font-bold transition hover:text-customOrange">Accueil</NavLink></li>
              <li><NavLink to="/a-propos" className="font-bold transition hover:text-customOrange">À propos</NavLink></li>
              <li><a href="#" className="font-bold transition hover:text-customOrange">Simulation</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Nos réseaux sociaux</h3>
            <div className="flex space-x-4 justify-center items-center">
              <a href="#" className="text-2xl font-bold transition hover:text-customOrange"><FacebookIcon /></a>
              <a href="#" className="text-2xl font-bold transition hover:text-customOrange"><FontAwesomeIcon icon={faTiktok} /></a>
              <a href="#" className="text-2xl font-bold transition hover:text-customOrange"><InstagramIcon /></a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Contactez nous</h3>
            <p className="font-bold mb-2">Address : XXX</p>
            <p className="font-bold mb-2 transition hover:text-customOrange">
              Email : <a href="mailto:amantaksit@gmail.com" className="hover:underline">amantaksit@gmail.com</a>
            </p>
            <p className="font-bold transition hover:text-customOrange">
              Phone : <a href="tel:+213778902067">+213 7 78 90 20 67</a>
            </p>
          </div>
        </div>
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p>&copy; Aman Taksit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;