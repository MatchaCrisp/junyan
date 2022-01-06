import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
const __LINKS={
    "github":"https://github.com/MatchaCrisp",
    "linkedin":"https://www.linkedin.com/in/junyan-ye/",
    "email":"bill@junyanye.com"
}
const FootNav=()=>{
    return (
        <Stack 
            className="footNav" 
            id="contact"
            flexDirection="column"
            justifyContent="space-around"
        >
            <Link 
                href={__LINKS.github} 
                target="_blank" 
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={["fab","github"]} />
                {__LINKS.github}
            </Link>
            <Link 
                href={__LINKS.linkedin} 
                target="_blank" 
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={["fab","linkedin-in"]} />
                {__LINKS.linkedin}
            </Link>
            <Link 
                href={__LINKS.email} 
                target="_blank" 
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faEnvelope} />
                {__LINKS.email}
            </Link>
        </Stack>
    )
}


export default FootNav;