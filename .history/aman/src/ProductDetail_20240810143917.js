import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8081/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Product data:', data); // Log the fetched data
        if (data && typeof data === 'object') {
          setProduct(data);
        } else {
          console.error('Unexpected data format:', data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    e.target.style.backgroundPosition = `${x}% ${y}%`;
    e.target.style.backgroundSize = '200%'; // Zoom in when hovering
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundPosition = 'center'; // Reset position
    e.target.style.backgroundSize = '100%'; // Reset zoom
  };

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto p-6 mb-20 animate-fadeInUp">
      <h1 className="text-3xl md:text-4xl font-semibold text-customDarkGreen mb-8 mt-8">Détails du produit : </h1>
      <div className="rounded-lg shadow-lg bg-customWhite p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div
            className="relative w-64 h-64 lg:w-96 lg:h-96 overflow-hidden"
            style={{
              backgroundImage: `url(http://localhost:8081/images/${product.image})`,
              backgroundSize: '100%',
              backgroundPosition: 'center',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          ></div>
          <div className="flex flex-col lg:ml-6 justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-customOrange mb-6">{product.title}</h2>
            <hr className="border-t-2 border-customOrange my-6 shadow-md" />
            <p className="text-lg mb-4"><strong>Brand : </strong> {product.brand}</p>
            <p className="text-lg mb-4"><strong>Details : </strong> {product.details}</p>
            <p className="text-lg"><strong>Price : </strong> {product.price} DA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;