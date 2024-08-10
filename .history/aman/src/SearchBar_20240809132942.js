import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() === '') {
      // Do nothing or show a message
      console.log('Please enter a search query.');
      return;
    }
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.length >= 2) {
      onSearch(newQuery);  // Trigger search only if query length is 2 or more
    } else {
      onSearch('');  // Optionally, clear search results if the query is less than 2 characters
    }
  };
  return (
    <div className="flex justify-center items-center">
      <TextField
        value={query}
        onChange={handleInputChange}
        placeholder="Search for products..."
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon className="text-customGreen" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onKeyDown={handleKeyDown}
        className="max-w-lg bg-customWhite border rounded-full"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '9999px', // Ensures full rounding similar to Tailwind's rounded-full
            '& fieldset': {
              borderColor: 'transparent', // Remove default border color
            },
            '&:hover fieldset': {
              borderColor: '#70ba50', // Custom Green on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#539c4f', // Custom Dark Green on focus
            },
          },
        }}
      />
    </div>
  );
}

export default SearchBar;