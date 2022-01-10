import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import React,{useState} from 'react';

import '../stylesheets/ProjectItem.scss';
/*
projInfo:{
    projTitle,
    projDesc,
    projPic,
    projTech,
    projLive,
    projSrc,
    projAlt
}
*/
const ProjectItem=({projInfo})=>{

    const [isExpand, setIsExpand]=useState(false);

    const handleExpand=()=>{
        setIsExpand(!isExpand);
    }
    
    const renderProjTxt=()=>{
        return <Typography align="center">{projInfo.projDesc}</Typography>
    }
    const renderTechList=()=>{

        const jsx=projInfo.projTech.map(tech=>{
            const leKey=`${projInfo.projId}-${tech}`;

            if (tech === "mui"){
                return <img src="./imgs/mui.png" alt="mui logo" className="mui-logo" key={leKey}/>
            }
            else if (tech === "d3"){
                return <img src="./imgs/d3.png" alt="d3 logo" className="d3-logo" key={leKey}/>
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
    // TODO: convert projTech to jsx array of font awesome icons

    return (   
        <Card sx={{width:320}} className="proj-item">
            <CardActionArea onClick={handleExpand}>
            <CardMedia 
                component="img"
                width="320"
                height="160"
                image={projInfo.projPic}
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