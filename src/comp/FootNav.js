// EXTERNAL
// react
import React from 'react';

// mui components
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';

// font awesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

// INTERNAL
import '../stylesheets/FootNav.scss';

// stores links relevant to website described by key
const __LINKS={
    "github":{link:"https://github.com/MatchaCrisp",
             desc:"https://github.com/MatchaCrisp"},
    "linkedin":{link:"https://www.linkedin.com/in/junyan-ye/",
                desc:"https://www.linkedin.com/in/junyan-ye/"},
    "email":{link:"mailto:bill@junyanye.com",
             desc:"bill@junyanye.com"}
}

const FootNav=()=>{
    // responsive breakpoint at viewport width 1000px
    const isDeskSz=useMediaQuery(`(min-width:1000px)`);
    
    return (
 
        <Stack 
            className="FootNav" 
            id="contact"
            flexDirection={isDeskSz?"row":"column"}
            justifyContent="space-around"
            sx={{paddingTop:2,paddingBottom:2,gap:1}}
        >
            <Link 
                href={__LINKS.github.link} 
                target="_blank" 
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={["fab","github"]} />
                {__LINKS.github.desc}
            </Link>
            <Link 
                href={__LINKS.linkedin.link} 
                target="_blank" 
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={["fab","linkedin-in"]} />
                {__LINKS.linkedin.desc}
            </Link>
            <Link 
                href={__LINKS.email.link} 
                target="_blank" 
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faEnvelope} />
                {__LINKS.email.desc}
            </Link>
        </Stack>

    )
}


export default FootNav;