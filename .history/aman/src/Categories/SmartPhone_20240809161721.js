import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

function SmartPhone() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8081/products/smart')
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
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4 mb-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-customDarkGreen mb-8 mt-8">SmartPhones :</h1>
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

export default SmartPhone