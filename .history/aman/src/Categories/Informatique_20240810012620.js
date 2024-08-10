import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import FilterListIcon from '@mui/icons-material/FilterList';

function Electromenager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('Tout');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    // Construct the API endpoint based on the selected filter
    const endpoint = selectedFilter === 'Tout'
      ? 'http://localhost:8081/products/electromenager'
      : `http://localhost:8081/products/electromenager?type=${selectedFilter.toLowerCase()}`;

    console.log(`Fetching products from: ${endpoint}`); // Debugging line

    fetch(endpoint)
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
  }, [selectedFilter]); // Re-fetch products when the selected filter changes

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const toggleFilterSidebar = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setIsFilterVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4 mb-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-customDarkGreen mb-8 mt-8">Électroménager :</h1>
      
      {/* Filter Icon */}
      <div className="relative mb-6">
        <button onClick={toggleFilterSidebar} className="flex items-center text-customDarkGreen hover:text-customOrange">
          <FilterListIcon fontSize="large" />
          <span className="ml-2 text-lg">Filtrer</span>
        </button>

        {/* Filter Sidebar */}
        {isFilterVisible && (
          <div
            ref={filterRef}
            className="absolute left-0 top-12 bg-white border border-gray-300 shadow-lg p-4 rounded-lg z-50 w-64"
          >
            <div className='flex flex-col items-start'>
              <h1 className='font-medium mb-4'>Filtrer :</h1>
              <div className='flex flex-col'>
                <div className='flex p-2 items-center'>
                  <h2 className='pr-4'>Tout</h2>
                  <input
                    type="checkbox"
                    checked={selectedFilter === 'Tout'}
                    onChange={() => handleFilterChange('Tout')}
                  />
                </div>
                <div className='flex p-2 items-center'>
                  <h2 className='pr-4'>Télévisions</h2>
                  <input
                    type="checkbox"
                    checked={selectedFilter === 'televisions'}
                    onChange={() => handleFilterChange('televisions')}
                  />
                </div>
                <div className='flex p-2 items-center'>
                  <h2 className='pr-4'>Cuisinières</h2>
                  <input
                    type="checkbox"
                    checked={selectedFilter === 'cuisinieres'}
                    onChange={() => handleFilterChange('cuisinieres')}
                  />
                </div>
                <div className='flex p-2 items-center'>
      <h2 className='pr-4'>Fours</h2>
      <input
        type="checkbox"
        checked={selectedFilter === 'fours'}
        onChange={() => setSelectedFilter('fours')}
      />
    </div>
    <div className='flex p-2 items-center'>
      <h2 className='pr-4'>Réfrigérateurs</h2>
      <input
        type="checkbox"
        checked={selectedFilter === 'refrigerateurs'}
        onChange={() => setSelectedFilter('refrigerateurs')}
      />
    </div>
    <div className='flex p-2 items-center'>
      <h2 className='pr-4'>Lave-linge</h2>
      <input
        type="checkbox"
        checked={selectedFilter === 'lave-linge'}
        onChange={() => setSelectedFilter('lave-linge')}
      />
    </div>
    <div className='flex p-2 items-center'>
      <h2 className='pr-4'>Climatiseurs</h2>
      <input
        type="checkbox"
        checked={selectedFilter === 'climatiseurs'}
        onChange={() => setSelectedFilter('climatiseurs')}
      />
    </div>
    <div className='flex p-2 items-center'>
      <h2 className='pr-4'>Lave-vaisselle</h2>
      <input
        type="checkbox"
        checked={selectedFilter === 'lave-vaisselle'}
        onChange={() => setSelectedFilter('lave-vaisselle')}
      />
    </div>
    <div className='flex p-2 items-center'>
      <h2 className='pr-4'>Micro-ondes</h2>
      <input
        type="checkbox"
        checked={selectedFilter === 'micro-ondes'}
        onChange={() => setSelectedFilter('micro-ondes')}
      />
    </div>
    <div className='flex p-2 items-center'>
      <h2 className='pr-4'>Plaques de Cuisson</h2>
      <input
        type="checkbox"
        checked={selectedFilter === 'plaques-de-cuisson'}
        onChange={() => setSelectedFilter('plaques-de-cuisson')}
      />
    </div>
    <div className='flex p-2 items-center'>
      <h2 className='pr-4'>Hottes</h2>
      <input
        type="checkbox"
        checked={selectedFilter === 'hottes'}
        onChange={() => setSelectedFilter('hottes')}
      />
    </div>
    <div className='flex p-2 items-center'>
      <h2 className='pr-4'>Petit Électroménager</h2>
      <input
        type="checkbox"
        checked={selectedFilter === 'petit-electromenager'}
        onChange={() => setSelectedFilter('petit-electromenager')}
      />
    </div>
    <div className='flex p-2 items-center'>
      <h2 className='pr-4'>Chauffages</h2>
      <input
        type="checkbox"
        checked={selectedFilter === 'chauffages'}
        onChange={() => setSelectedFilter('chauffages')}
      />
    </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Link
            to={`/product/${product.ID}`}
            key={product.ID}
            className="border border-gray-300 rounded-lg shadow-lg bg-customWhite p-4 hover:border-customOrange hover:shadow-2xl transition-all duration-300"
          >
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

export default Inf;