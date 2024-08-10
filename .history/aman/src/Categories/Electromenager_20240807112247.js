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
    <Loading ></Loading>
  }

  return (
    <div className="m-10">
      <h1 className="text-3xl md:text-4xl font-semibold text-customDarkGreen mb-8">Electromenager Products</h1>
      <ul className="space-y-8">
        {products.map(product => (
          <li key={product.ID} className="border p-6 rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold text-customOrange mb-4">{product.title}</h2>
            <p className="text-lg"><strong>Brand:</strong> {product.brand}</p>
            <p className="text-lg"><strong>Details:</strong> {product.details}</p>
            <p className="text-lg"><strong>Price:</strong> {product.price}</p>
            <img 
              src={product.image} 
              alt={product.title} 
              className="mt-4 w-full h-auto rounded-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Electromenager;