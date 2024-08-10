import React from 'react';

function CategoryDetails({ category }) {
  return (
    <div className='mt-6 p-4 border rounded-lg shadow-lg bg-white'>
      <h2 className='text-2xl font-semibold text-customDarkGreen mb-4'>{category.name}</h2>
      <p className='text-lg text-gray-800'>{category.description}</p>
    </div>
  );
}

export default CategoryDetails;