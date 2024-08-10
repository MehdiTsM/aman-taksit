import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const FilterComponent = ({ selectedFilter, onFilterChange }) => {
  return (
    <div className='flex flex-col items-start'>
      <h1 className='font-medium'>Filtrer :</h1>
      <div className='flex flex-wrap'>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Tout</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'Tout'}
            onChange={() => onFilterChange('Tout')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Télévisions</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'Télévisions'}
            onChange={() => onFilterChange('Télévisions')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Cuisinières</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'cuisinières'}
            onChange={() => onFilterChange('cuisinières')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Fours</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'fours'}
            onChange={() => onFilterChange('fours')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Réfrigérateurs</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'refrigerateurs'}
            onChange={() => onFilterChange('refrigerateurs')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Lave-linge</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'lave-linge'}
            onChange={() => onFilterChange('lave-linge')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Climatiseurs</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'climatiseurs'}
            onChange={() => onFilterChange('climatiseurs')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Lave-vaisselle</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'lave-vaisselle'}
            onChange={() => onFilterChange('lave-vaisselle')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Micro-ondes</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'micro-ondes'}
            onChange={() => onFilterChange('micro-ondes')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Plaques de Cuisson</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'plaques-de-cuisson'}
            onChange={() => onFilterChange('plaques-de-cuisson')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Hottes</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'hottes'}
            onChange={() => onFilterChange('hottes')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Petit Électroménager</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'petit-electromenager'}
            onChange={() => onFilterChange('petit-electromenager')}
          />
        </div>
        <div className='flex p-5 items-center'>
          <h2 className='pr-4'>Chauffages</h2>
          <input
            type="checkbox"
            checked={selectedFilter === 'chauffages'}
            onChange={() => onFilterChange('chauffages')}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;

function Electromenager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('Tout');

  useEffect(() => {
    const fetchProducts = () => {
      let url = `http://localhost:8081/products/electromenager`;
      if (selectedFilter !== 'Tout') {
        url += `?type=${selectedFilter}`;
      }

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            setProducts(data);
          } else {
            console.error('Unexpected data format:', data);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    };

    fetchProducts();
  }, [selectedFilter]); // Re-fetch products whenever the selected filter changes

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4 mb-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-customDarkGreen mb-8 mt-8">Électroménager :</h1>
      <FilterComponent selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Link to={`/product/${product.ID}`} key={product.ID} className="border border-gray-300 rounded-lg shadow-lg bg-customWhite p-4 hover:border-customOrange hover:shadow-2xl transition-all duration-300">
            <img 
              src={`http://localhost:8081/images/${product.image}`} 
              alt={product.title} 
              className="w-full h-52 object-cover rounded-t-lg mb-4"
            />
            <div className="flex flex-col">
              <h2 className="text-xl mt-2 font-bold text-customDarkGreen mb-2 truncate">{product.title}</h2>
              <p className="text-lg"><strong>{product.brand}</strong></p>
              <p className="text-sm mt-2 text-gray-600 truncate"><strong>Détails : </strong> {product.details}</p>
              <p className="text-lg mt-2 text-gray-600"><strong className='font-semibold'>Prix : </strong> {product.price}</p>
              <p className='mt-2 font-semibold text-customOrange text-lg'>Voir plus</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Electromenager;