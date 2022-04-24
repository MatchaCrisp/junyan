import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
// component for getting user input
// said input used in filtering/searching for certain projects with matching keywords
const Searcher=({searchString,handleChange,isInvalidInput})=>{
    return (
        <TextField
        id="search-input"
        label={<SearchIcon />}
        size="small"
        type="search"
        variant="standard"
        error={isInvalidInput}
        helperText={"Invalid characters!"}
        value={searchString}
        onChange={handleChange}
      />
    )
}

export default SearchBar;