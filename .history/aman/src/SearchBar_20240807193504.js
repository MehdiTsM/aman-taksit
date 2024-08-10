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
      <div className="relative rounded-md border border-gray-300 bg-white">
        <TextField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch} className="rounded-r-md">
                  <SearchIcon className="text-customGreen" />
                </IconButton>
              </InputAdornment>
            ),
            classes: {
              notchedOutline: "border-none", // Remove default border
            },
          }}
          className="rounded-md bg-white" // Apply rounded corners
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '0.375rem', // Tailwind's rounded-md equivalent
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
    </div>
  );
}

export default SearchBar;
