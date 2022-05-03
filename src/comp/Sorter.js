// EXTERNAL
// react
import React from 'react';
// mui
import SortIcon from '@mui/icons-material/Sort';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// component for sorting list of projects 
// alphabetical order
// reverse alphabetical order
// newest
// oldest
const Sorter=({order,handleChange})=>{
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="sort-label" size="small"><SortIcon /></InputLabel>
            <Select
                labelId="sort-label"
                id="sort"
                value={order}
                label="Order"
                onChange={handleChange}
            >
                <MenuItem value={"alph"}>A-Z</MenuItem>
                <MenuItem value={"rev_alph"}>Z-A</MenuItem>
                <MenuItem value={"newest"}>newest</MenuItem>
                <MenuItem value={"oldest"}>oldest</MenuItem>
            </Select>
        </FormControl>

    )

}

export default Sorter;