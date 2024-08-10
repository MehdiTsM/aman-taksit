import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';

function Electromenager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8081/products/Electromenager')
      .then(response => response.json())
      .then(data => {
        // Check if the response is an array
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-customDarkGreen mb-8 mt-8">Électroménager :</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.ID} className="border rounded-lg shadow-lg bg-customWhite p-4 hover:border-customOrange hover:border-2 transition-all duration-300">
            <img 
              src={`http://localhost:8081/images/${product.image}`} 
              alt={product.title} 
              className="w-full h-52 object-cover rounded-t-lg mb-4"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-customOrange mb-2 truncate">{product.title}</h2>
              <p className="text-lg"><strong>Brand:</strong> {product.brand}</p>
              <p className="text-sm mt-2 text-gray-600 truncate"><strong>Details:</strong> {product.details}</p>
              <p className="text-lg mt-2 text-gray-600"><strong className='font-semibold'>Price:</strong> {product.price}</p>
              <p className='mt-2 font-semibold text-customDarkGreen text-lg'>Voir plus</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electromenager;