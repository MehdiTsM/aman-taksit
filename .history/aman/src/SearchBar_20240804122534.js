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
    <div className="flex justify-center items-center" >
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
        className="max-w-lg "
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#FFFFFF',
            borderRadius: '25px',
            '& fieldset': {
              borderColor: '#70ba50',
            },
            '&:hover fieldset': {
              borderColor: '#34D399',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#539c4f',
            },
          },
          '& .MuiInputBase-input': {
            color: 'black', 
          },
          '& .MuiInputAdornment-root .MuiIconButton-root': {
            color: '#539c4f', 
          },
        }}
      />
    </div>
  );
}

export default SearchBar;