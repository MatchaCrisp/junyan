import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SortIcon from '@mui/icons-material/Sort';

// component for sorting list of projects 
// alphabetical order
// reverse alphabetical order
// newest
// oldest
const Sorter=({handleClick})=>{
    // sort menu state
    const [anchorElState, setAnchorElState] = useState(null);
    const isOpen = Boolean(anElState);

    // handles opening sort menu
    const handleOpen = e => {
        setAnchorElState(e.currentTarget);
    }
    //handles closing sort menu
    const handleClose = () => {
        setAnchorElState(null);
    }

    return (
        <div className="collapsible-menu">
            <Button
                id='sort-button'
                aria-controls={isOpen ? 'int-nav-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={handleOpen}
            >
                {isOpen ? <SortIcon /> : <SortIcon />}
            </Button>
            <Menu
                id='int-nav-menu'
                anchorEl={anchorElState}
                open={isOpen}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'int-nav-button',
                }}
            >
                <MenuItem onClick={() => {
                    handleClose();
                    handleClick("alph");
                }}>
                    A-Z
                </MenuItem>
                <MenuItem onClick={() => {
                    handleClose();
                    handleClick("rev_alph");
                }}>
                    Z-A
                </MenuItem>
                <MenuItem onClick={() => {
                    handleClose();
                    handleClick("newest");
                }}>
                    newest
                </MenuItem>
                <MenuItem onClick={() => {
                    handleClose();
                    handleClick("oldest");
                }}>
                    oldest
                </MenuItem>

            </Menu>
        </div>
    )

}

export default Sorter;