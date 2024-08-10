import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/search`, {
                params: { query }
            });
            setResults(response.data);
        } catch (error) {
            console.error('Search error:', error);
        }
    };

    return (
        <div className="search-component">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="border p-2 rounded"
            />
            <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
                Search
            </button>
            <div className="results mt-4">
                {results.length > 0 ? (
                    results.map((product, index) => (
                        <div key={index} className="border p-2 mt-2 rounded">
                            <h2 className="font-bold">{product.title}</h2>
                            <p>{product.brand}</p>
                            <p>{product.details}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};

export default SearchComponent;