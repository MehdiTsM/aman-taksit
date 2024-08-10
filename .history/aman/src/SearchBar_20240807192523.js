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
        }}
        className="max-w-lg" // Tailwind class for width
        sx={{
          backgroundColor: 'white', // MUI styling for background color
          borderRadius: '9999px', // MUI styling for rounded corners
          '& .MuiOutlinedInput-root': {
            borderRadius: '9999px', // Ensures the input has rounded corners
            '& fieldset': {
              border: 'none', // Removes the border
            },
            '&.Mui-focused fieldset': {
              border: 'none', // Removes the border on focus
            },
          },
          '& .MuiInputBase-input': {
            border: 'none', // Ensures there's no border on the input itself
            outline: 'none', // Removes the outline
          },
        }}
      />
    </div>
  );
}

export default SearchBar;