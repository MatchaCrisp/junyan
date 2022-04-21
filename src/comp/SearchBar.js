import React from 'react';

// component for getting user input
// said input used in filtering/searching for certain projects with matching keywords
const SearchBar=({searchString,handleChange})=>{
    return (
        <label for="search-input">
            search for what project you want to see with the field below!
            <input 
                type="text"
                onChange={handleChange}
                value={searchString}
                default="Project name/tech"
                id="search-input"
                name="search-input"
            />
        </label>
    )
}

export default SearchBar;