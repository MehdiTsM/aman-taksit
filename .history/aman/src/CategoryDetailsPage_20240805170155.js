import React from 'react';
import { useParams } from 'react-router-dom';

const categories = [
  { name: 'Electroménager', description: 'Appareils électroménagers pour la maison', items: [...] },
  { name: 'Smart Phone', description: 'Téléphones intelligents et accessoires', items: [...] },
  { name: 'Informatique', description: 'Ordinateurs et équipements informatiques', items: [...] },
  { name: 'Audio', description: 'Équipements audio et casques', items: [...] },
  { name: 'Télévision', description: 'Téléviseurs et équipements de home cinéma', items: [...] },
  { name: 'Jeux vidéo', description: 'Consoles et accessoires de jeux vidéo', items: [...] },
];

function CategoryDetailsPage() {
  const { name } = useParams();
  const category = categories.find(cat => cat.name === decodeURIComponent(name));

  if (!category) {
    return <div className='p-4'>Category not found</div>;
  }

  return (
    <div className='p-4'>
      <h1 className="text-2xl md:text-3xl font-semibold text-customDarkGreen mt-4 mb-6">{category.name}</h1>
      <p className='text-lg text-gray-800'>{category.description}</p>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {category.items.map((item, index) => (
          <div key={index} className='p-4 border rounded-lg shadow-lg bg-white'>
            <img src={item.image} alt={item.name} className='w-full h-32 object-cover mb-4' />
            <h2 className='text-xl font-semibold text-customDarkGreen mb-2'>{item.name}</h2>
            <p className='text-lg text-gray-800'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDetailsPage;