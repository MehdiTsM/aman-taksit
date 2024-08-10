import React, { useState } from 'react';
import CategoryDetails from './CategoryDetails';

const categories = [
  { name: 'Electroménager', description: 'Appareils électroménagers pour la maison' },
  { name: 'Smart Phone', description: 'Téléphones intelligents et accessoires' },
  { name: 'Informatique', description: 'Ordinateurs et équipements informatiques' },
  { name: 'Audio', description: 'Équipements audio et casques' },
  { name: 'Télévision', description: 'Téléviseurs et équipements de home cinéma' },
  { name: 'Jeux vidéo', description: 'Consoles et accessoires de jeux vidéo' },
];

function CategoriesPages() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='p-4'>
      <h1 className="text-2xl md:text-3xl font-semibold text-customDarkGreen mt-4 mb-6">Nos catégories :</h1>
      
      <div className='cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='p-6 border rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105'
            onClick={() => handleCategoryClick(category)}
          >
            <h2 className='text-xl md:text-2xl font-semibold text-customDarkGreen mb-2'>{category.name} :</h2>
            <p className='text-sm md:text-base text-gray-800'>{category.description}</p>
          </div>
        ))}
      </div>

      {selectedCategory && <CategoryDetails category={selectedCategory} />}
    </div>
  );
}

export default CategoriesPages;