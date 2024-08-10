import React from 'react';
import { useParams } from 'react-router-dom';

const categories = [
  { name: 'Electroménager', description: 'Appareils électroménagers pour la maison' },
  { name: 'Smart Phone', description: 'Téléphones intelligents et accessoires' },
  { name: 'Informatique', description: 'Ordinateurs et équipements informatiques' },
  { name: 'Audio', description: 'Équipements audio et casques' },
  { name: 'Télévision', description: 'Téléviseurs et équipements de home cinéma' },
  { name: 'Jeux vidéo', description: 'Consoles et accessoires de jeux vidéo' },
];

function CategoryDetailsPage() {
  const { name } = useParams();
  const category = categories.find(cat => cat.name === decodeURIComponent(name));

  return (
    <div className='p-4'>
      <h1 className="text-2xl md:text-3xl font-semibold text-customDarkGreen mt-4 mb-6">{category?.name}</h1>
      <p className='text-lg text-gray-800'>{category?.description}</p>
      {/* Add more details here */}
    </div>
  );
}

export default CategoryDetailsPage;