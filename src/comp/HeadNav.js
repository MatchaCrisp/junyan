// React 
import React, {useState} from 'react';

// Mui Components
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

// Viewport hook
import useDim from '../hook/useDim';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const _HEAD_BREAK=500;
const _INT_NAV_ABOUT='#about';
const _INT_NAV_PROJECTS='#projects';
const _INT_NAV_CONTACT='#contact';

// spans width of viewport, lists internal sections of webpage: about, projects, and contacts

const HeadNav = () =>{
    const {gWidth,gHeight}=useDim();
    const [anElState, setAnElState]=useState(null);
    const isOpen = Boolean(anElState);
    // conditionall render full buttons or hamburger based on viewport width
    
    // for viewports larger than 500 px
    const bigVP=()=>{
        return (
            <Stack spacing={2} direction='row'>
                <Button variant='text' href={_INT_NAV_ABOUT}>About</Button>
                <Button variant='text' href={_INT_NAV_PROJECTS}>Projects</Button>
                <Button variant='text' href={_INT_NAV_CONTACT}>Contact</Button>
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
    const smallVP=()=>{
        return (
            <div className="ham">
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
                    id='int_nav_menu'
                    anchorEl={anElState}
                    open={isOpen}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby':'int_nav_button',
                    }}
                >
                    <MenuItem onClick={handleClose} href={_INT_NAV_ABOUT}>About</MenuItem>
                    <MenuItem onClick={handleClose} href={_INT_NAV_PROJECTS}>Projects</MenuItem>
                    <MenuItem onClick={handleClose} href={_INT_NAV_CONTACT}>Contact</MenuItem>
                </Menu>
            </div>
        )
    }
    
    return (
        <Stack
            className='nav_head'
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            spacing={2}
        >
            {gWidth<_HEAD_BREAK?smallVP():null}
            <Typography variant='h4' className={gWidth>=_HEAD_BREAK?'logo_left':'logo_center'}>Junyan Ye</Typography>
            {gWidth>=_HEAD_BREAK?bigVP():null}
        </Stack>
    )
}

export default HeadNav;