// React 
import React, {useState} from 'react';
import ElevScroll from './ElevScroll';

// Mui Components
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';

// Viewport hook
import useDim from '../hook/useDim';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const _HEAD_BREAK=500;
const __INT_NAV={
    "about":"#about",
    "projects":"#projects",
    "contact":"#contact"
};

// spans width of viewport, lists internal sections of webpage: about, projects, and contacts

const HeadNav = () =>{
    const {gWidth}=useDim();
    const [anElState, setAnElState]=useState(null);
    const isOpen = Boolean(anElState);
    // conditionall render full buttons or hamburger based on viewport width
    
    // for viewports larger than 500 px
    const stacks=()=>{
        return (
            <Stack spacing={2} direction='row'>
                <Button color="secondary" variant='text' href={__INT_NAV.about}>About</Button>
                <Button color="secondary" variant='text' href={__INT_NAV.projects}>Projects</Button>
                <Button color="secondary" variant='text' href={__INT_NAV.contact}>Contact</Button>
            </Stack>
        )
    }
    
    // for viewports under 500 px
    //handles opening hamburger menu
    const handleOpen=e=>{
        setAnElState(e.currentTarget);
    }
    //handles closing hamburger menu
    const handleClose=()=>{
        setAnElState(null);
    }
    //jsx for hamburger menu
    const hamburgs=()=>{
        return (
            <div className="collapsible-menu">
                <Button color="secondary"
                    id='int_nav_button'
                    aria-controls={isOpen?'int_nav_menu':undefined}
                    aria-haspopup='true'
                    aria-expanded={isOpen?'true':undefined}
                    onClick={handleOpen}
                >
                    {isOpen?<MenuOpenIcon />:<MenuIcon />}
                </Button>
                <Menu
                    sx={{backgroundColor:"secondary"}}
                    id='int_nav_menu'
                    anchorEl={anElState}
                    open={isOpen}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby':'int_nav_button',
                    }}
                >
                    <MenuItem color="secondary" onClick={handleClose} href={__INT_NAV.about}>About</MenuItem>
                    <MenuItem color="secondary" onClick={handleClose} href={__INT_NAV.projects}>Projects</MenuItem>
                    <MenuItem color="secondary" onClick={handleClose} href={__INT_NAV.contact}>Contact</MenuItem>
                </Menu>
            </div>
        )
    }
    
    return (
        <React.Fragment>
        <ElevScroll>
                <AppBar
                    sx={{ backgroundColor: "primOff" }}
                    className='head-hav-section'

                    spacing={2}
                >
                    <ToolBar
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginRight: "1rem"
                        }}
                    >
                        {gWidth < _HEAD_BREAK ? hamburgs() : null}
                        <Typography color="secondary" variant='h4' className={gWidth >= _HEAD_BREAK ? 'logo_left' : 'logo_center'}>Junyan Ye</Typography>
                        {gWidth >= _HEAD_BREAK ? stacks() : null}
                    </ToolBar>
                </AppBar>
        </ElevScroll>
        <ToolBar />
        
        </React.Fragment>
    )
}

export default HeadNav;