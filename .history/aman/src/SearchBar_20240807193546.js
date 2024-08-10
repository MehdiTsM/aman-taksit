import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex border rounded-md overflow-hidden">
        <TextField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
            classes: {
              notchedOutline: "border-none", // Remove default border
            },
          }}
          className="rounded-none rounded-l-md bg-white" // Apply rounded corners to the left
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '0', // Remove default border radius
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
        <IconButton
          onClick={handleSearch}
          className="rounded-none rounded-r-md border-l-0 bg-white hover:bg-gray-100"
        >
          <SearchIcon className="text-customGreen" />
        </IconButton>
      </div>
    </div>
  );
}

export default SearchBar;