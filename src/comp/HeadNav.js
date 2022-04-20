// EXTERNAL
// React 
import React, {useState, Fragment} from 'react';
import ElevScroll from './ElevScroll';

// MUI Components
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
// MUI icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// INTERNAL
import '../stylesheets/HeadNav.scss';

// constant converting certain keywords into internal navigation links
const __INT_NAV={
    "about":"#about",
    "projects":"#projects",
    "contact":"#contact"
};

// spans width of viewport, internal sections of webpage: about, projects, and contacts
const HeadNav = () =>{
    // hamburger menu (only for viewports narrower than 700 px)
    const [anchorElState, setAnchorElState]=useState(null);
    const isOpen = Boolean(anElState);

    // conditionally render full buttons or hamburger based on viewport width
    const isDeskSz=useMediaQuery('(min-width:700px)');

    // for viewports wider than 700 px
    const stacks=()=>{
        return (
            <Stack spacing={2} direction='row'>
                <Button variant='text' href={__INT_NAV.about}>About</Button>
                <Button variant='text' href={__INT_NAV.projects}>Projects</Button>
                <Button variant='contained' href={__INT_NAV.contact}>Contact</Button>
            </Stack>
        )
    }
    
    // for viewports under 700 px
    //handles opening hamburger menu
    const handleOpen=e=>{
        setAnchorElState(e.currentTarget);
    }
    //handles closing hamburger menu
    const handleClose=()=>{
        setAnchorElState(null);
    }
    //jsx for hamburger menu
    const hamburgs=()=>{
        return (
            <div className="collapsible-menu">
                <Button 
                    id='int_nav_button'
                    aria-controls={isOpen?'int_nav_menu':undefined}
                    aria-haspopup='true'
                    aria-expanded={isOpen?'true':undefined}
                    onClick={handleOpen}
                >
                    {isOpen?<MenuOpenIcon />:<MenuIcon />}
                </Button>
                <Menu
                    id='int-nav-menu'
                    anchorEl={anchorElState}
                    open={isOpen}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby':'int_nav_button',
                    }}
                >
                    <MenuItem onClick={handleClose} href={__INT_NAV.about}>About</MenuItem>
                    <MenuItem onClick={handleClose} href={__INT_NAV.projects}>Projects</MenuItem>
                    <MenuItem onClick={handleClose} href={__INT_NAV.contact}>Contact</MenuItem>
                </Menu>
            </div>
        )
    }
    
    return (
        <Fragment>
        <ElevScroll>
                <AppBar
                    className='HeadNav'
                    id="head-nav"
                    spacing={2}
                >
                    <ToolBar
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginRight: "1rem"
                        }}
                    >
                        <Typography variant='h4' sx={{marginLeft:1}}>Junyan Ye</Typography>
                        {isDeskSz ? stacks() : hamburgs()}
                    </ToolBar>
                </AppBar>
        </ElevScroll>
        <ToolBar />
        
        </Fragment>
    )
}

export default HeadNav;