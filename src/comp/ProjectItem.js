// EXTERNAL
// react
import React,{useState} from 'react';

// MUI components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

// font awesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// INTERNAL
import muiIcon from '../imgs/mui.png';
import d3Icon from '../imgs/d3.png';
import images from '../imgs/ind.js';
import '../stylesheets/ProjectItem.scss';
// structure of the passed in object
/*
projInfo:{
    projTitle:string=descriptive project title
    projDesc:string=short summary of project
    projPic:string=relative path to thumbnail
    projTech:string[]=list of technologies used in project
    projLive:string=url to live demo of project
    projSrc:string=url to github code
    projAlt:string=alt text for accessibility purposes
}
*/
const ProjectItem=({projInfo})=>{

    // description is hidden by default
    const [isExpand, setIsExpand]=useState(false);

    const handleExpand=()=>{
        setIsExpand(!isExpand);
    }
    
    const renderProjTxt=()=>{
        return <Typography align="center">{projInfo.projDesc}</Typography>
    }
    // turns tech array into jsx array of font awesome icons
    const renderTechList=()=>{

        const jsx=projInfo.projTech.map(tech=>{
            const leKey=`${projInfo.projId}-${tech}`;

            if (tech === "mui"){
                return <img src={muiIcon} alt="mui logo" className="mui-logo" key={leKey}/>
            }
            else if (tech === "d3"){
                return <img src={d3Icon} alt="d3 logo" className="d3-logo" key={leKey}/>
            }
            else{
                return <FontAwesomeIcon className="tech-logo" icon={["fab",tech]} key={leKey}/>
            }});
        return (
            <Stack 
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
            >
                {jsx}
            </Stack>
        )
    }
    // return jsx array of buttons that corresponds to live demo/github link (if exists)
    const renderProjButt=()=>{
        const liveButt=projInfo.projLive!==""?<Button href={projInfo.projLive} variant="outlined" target="_blank" rel="noreferrer">Live</Button>:null;
        const srcButt=projInfo.projSrc!==""?<Button href={projInfo.projSrc} variant="outlined" target="_blank" rel="noreferrer">Src Code</Button>:null;
        return (
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={3}
                sx={{margin:1}}
            >
                {liveButt}
                {srcButt}
            </Stack>
        )
    }


    return (   
        <Card sx={{width:320}} className="ProjectItem">
            <CardActionArea onClick={handleExpand}>
            <CardMedia 
                component="img"
                width="320"
                height="160"
                image={images[projInfo.projPic]}
                alt={projInfo.projAlt}
            />
            <CardContent>
                {renderTechList()}
                <Typography variant="h5" align="center">{projInfo.projTitle}</Typography>
                {isExpand?renderProjTxt():null}
            </CardContent>
            </CardActionArea>
            {isExpand?renderProjButt():null}
        </Card>
    )
}

export default ProjectItem;