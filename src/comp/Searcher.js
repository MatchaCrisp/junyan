// EXTERNAL
// react
import React from 'react';
// mui
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// component for getting user input
// said input used in filtering/searching for certain projects with matching keywords
const Searcher=({searchString,handleChange,isInvalidInput})=>{
    return (
        <TextField
        id="search-input"
        label={<Typography><SearchIcon />tech/project name</Typography>}
        size="small"
        type="search"
        variant="standard"
        error={isInvalidInput}
        helperText={isInvalidInput?"Invalid characters!":""}
        value={searchString}
        onChange={handleChange}
      />
    )
}

export default Searcher;