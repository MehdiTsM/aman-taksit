import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';


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
<div className="container mx-auto p-6 mb-20">
  <h1 className="text-3xl md:text-4xl font-semibold text-customDarkGreen mb-8 mt-8">Product Details : </h1>
  <div className="rounded-lg shadow-lg bg-customWhite p-6 lg:p-8">
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      <img
        src={`http://localhost:8081/images/${product.image}`}
        alt={product.title}
        className="w-full h-72 lg:h-96 object-cover rounded-lg mb-6 lg:mb-0 lg:mr-6"
      />
        <div className="flex flex-col lg:ml-6 justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-customOrange mb-6">{product.title}</h2> {/* Increased bottom margin */}
        <hr className="border-t-2 border-customOrange my-6 shadow-md" /> {/* Increased vertical margins */}
        <p className="text-lg mb-4"><strong>Brand:</strong> {product.brand}</p> {/* Increased bottom margin */}
        <p className="text-lg mb-4"><strong>Details:</strong> {product.details}</p> {/* Increased bottom margin */}
        <p className="text-lg"><strong>Price:</strong> {product.price}</p>
        </div>
    </div>
  </div>
</div>
  );
}

export default ProductDetail;