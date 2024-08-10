import React, { useState, useEffect } from 'react';
import Loading from '../Loading';

function Electromenager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8081/products/Electromenager')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
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
      <h1 className="text-3xl md:text-4xl font-semibold text-customDarkGreen mb-8">Électroménager :</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.ID} className="border rounded-lg shadow-lg bg-white p-4 hover:shadow-2xl transition-shadow duration-300">
            <img 
              src={`http://localhost:8081/images/${product.image}`} 
              alt={product.title} 
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-customOrange mb-2">{product.title}</h2>
              <p className="text-lg"><strong>Brand:</strong> {product.brand}</p>
              <p className="text-sm text-gray-600"><strong>Details:</strong> {product.details}</p>
              <p className="text-lg font-semibold mt-2"><strong>Price:</strong> {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electromenager;