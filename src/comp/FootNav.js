import React from 'react';

import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import '../stylesheets/FootNav.scss';
const __LINKS={
    "github":{link:"https://github.com/MatchaCrisp",
             desc:"https://github.com/MatchaCrisp"},
    "linkedin":{link:"https://www.linkedin.com/in/junyan-ye/",
                desc:"https://www.linkedin.com/in/junyan-ye/"},
    "email":{link:"mailto:bill@junyanye.com",
             desc:"bill@junyanye.com"}
}
const FootNav=()=>{
    const isDeskSz=useMediaQuery(`(min-width:1000px)`);
    return (
 
        <Stack 
            className="footNav" 
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