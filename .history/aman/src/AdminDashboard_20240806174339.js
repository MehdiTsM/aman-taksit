import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', image: '' });
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [token]);

  const handleAddProduct = async () => {
    try {
      await axios.post('/api/products', newProduct, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewProduct({ name: '', description: '', price: '', image: '' });
      const response = await axios.get('/api/products', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const response = await axios.get('/api/products', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="animate-fadeInUp p-4 md:p-6">
      <div className="bg-gray-200 p-4 mb-6 rounded-lg shadow-md">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Admin Dashboard</h1>
        
        <div className="bg-customOrange p-4 mb-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Add Product</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
            <textarea
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
            <button
              onClick={handleAddProduct}
              className="bg-customBlue text-white p-2 rounded-lg hover:bg-customDarkGreen transition"
            >
              Add Product
            </button>
          </div>
        </div>

        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Product List</h2>
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id} className="flex justify-between items-center p-4 border-b border-gray-300">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </div>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;