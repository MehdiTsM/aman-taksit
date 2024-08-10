import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';

function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8081/product/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Product data:', data); // Log the fetched data
        if (data && typeof data === 'object') {
          setProduct(data);
        } else {
          console.error('Unexpected data format:', data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-customDarkGreen mb-8 mt-8">Product Details :</h1>
      <div className="rounded-lg shadow-lg bg-customWhite p-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <img
            src={`http://localhost:8081/images/${product.image}`}
            alt={product.title}
            className="w-full h-64 lg:h-80 object-cover rounded-t-lg mb-4 lg:mb-0 lg:mr-4"
          />
          <div className="flex flex-col lg:ml-4">
            <h2 className="text-2xl md:text-3xl font-bold text-customOrange mb-2">{product.title}</h2>
            <br />
            <hr className="border-t-4 border-customOrange my-6 shadow-md" />            <br />
            <p className="text-lg mb-2"><strong>Brand:</strong> {product.brand}</p>
            <p className="text-lg mb-2"><strong>Details:</strong> {product.details}</p>
            <p className="text-lg"><strong>Price:</strong> {product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;