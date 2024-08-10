import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { name: 'Electroménager', description: 'Appareils électroménagers pour la maison', items: [...] },
    { name: 'Smart Phone', description: 'Téléphones intelligents et accessoires', items: [...] },
    { name: 'Informatique', description: 'Ordinateurs et équipements informatiques', items: [...] },
    { name: 'Audio', description: 'Équipements audio et casques', items: [...] },
    { name: 'Télévision', description: 'Téléviseurs et équipements de home cinéma', items: [...] },
    { name: 'Jeux vidéo', description: 'Consoles et accessoires de jeux vidéo', items: [...] },
  ];

function CategoriesPages() {
    return (
      <div className='p-4'>
        <h1 className="text-2xl md:text-3xl font-semibold text-customDarkGreen mt-4 mb-6">Nos catégories :</h1>
        
        <div className='cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${encodeURIComponent(category.name)}`}
              className='p-6 border rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105'
            >
              <h2 className='text-xl md:text-2xl font-semibold text-customDarkGreen mb-2'>{category.name} :</h2>
              <p className='text-sm md:text-base text-gray-800'>{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  export default CategoriesPages;