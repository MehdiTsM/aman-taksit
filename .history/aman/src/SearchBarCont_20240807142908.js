import React, { useState, useRef, useEffect } from 'react';
import { Container } from '@mui/material';
import SearchBar from './SearchBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';

function SearchBarCont() {
  const [showCategories, setShowCategories] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categoriesRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowCategories(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    fetch('http://localhost:8081/products/informatique') // Adjust endpoint if needed
      .then(response => response.json())
      .then(data => {
        console.log('Fetched products:', data); // Log fetched data
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSearch = (query) => {
    // Filter products based on search query
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <div className='mt-10 bg-customOrange p-2'>
        <Container>
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
            <div
              ref={buttonRef}
              className="relative flex-shrink-0 flex items-center hover:bg-white hover:text-customGreen transition border-2 rounded-xl p-2 cursor-pointer mb-2 md:mb-0"
              onClick={toggleCategories}
            >
              <h1 className="md:text-xl text-xl font-medium">Catégories</h1>
              <ArrowDropDownIcon className="top-1 relative" />
              {showCategories && (
                <div
                  ref={categoriesRef}
                  className="absolute left-0 top-full mt-2 w-48 border-2 rounded-xl p-4 bg-white shadow-lg z-10 transition-all duration-300"
                >
                  <h2 className="text-lg text-customDarkGreen font-semibold">Catégories</h2>
                  <br />
                  <hr />
                  <br />
                  <ul className="text-customOrange text-lg font-medium flex flex-col">
                    <NavLink to='/category/Electroménager'>
                      <li className="hover:text-customGreen cursor-pointer transition mb-2">Electroménager</li>
                    </NavLink>
                    <NavLink to='/category/Smart phone'>
                      <li className="hover:text-customGreen cursor-pointer transition mb-2">Smart Phone</li>
                    </NavLink>
                    <NavLink to='/category/Informatique'>
                      <li className="hover:text-customGreen cursor-pointer transition mb-2">Informatique</li>
                    </NavLink>
                    <NavLink to='/category/Motocycle'>
                      <li className="hover:text-customGreen cursor-pointer transition mb-2">Motocycle</li>
                    </NavLink>
                    <NavLink to='/category/Meubles'>
                      <li className="hover:text-customGreen cursor-pointer transition mb-2">Meubles</li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex-grow w-full md:w-auto">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
          {/* Display filtered products here */}
          <div className="mt-4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.ID} className="border border-gray-300 rounded-lg shadow-lg bg-customWhite p-4 hover:border-customOrange hover:shadow-2xl transition-all duration-300">
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
            ) : (
              <p>No products found</p>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default SearchBarCont;