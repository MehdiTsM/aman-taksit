import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading'; // Adjust path if necessary

function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching product with ID: ${id}`); // Log the ID
    fetch(`http://localhost:8081/products/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Product data:', data); // Log the fetched data
        if (Array.isArray(data)) {
          setProduct(data[0]); // Use the first item if the response is an array
        } else {
          setProduct(data);
        }
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setError('Unable to fetch product details.');
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-customDarkGreen mb-8 mt-8">Détails du Produit</h1>
      <div className="border border-gray-300 rounded-lg shadow-lg bg-customWhite p-6 hover:border-customOrange transition-all duration-300">
        <img
          src={`http://localhost:8081/images/${product.image}`}
          alt={product.title}
          className="w-full h-64 object-cover rounded-t-lg mb-6"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-customOrange mb-4">{product.title}</h2>
          <p className="text-lg mb-2"><strong>Marque:</strong> {product.brand}</p>
          <p className="text-lg mb-2"><strong>Détails:</strong> {product.details}</p>
          <p className="text-lg mb-2"><strong>Prix:</strong> {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;