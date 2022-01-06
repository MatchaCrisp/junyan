import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import React,{useState} from 'react';
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
    console.log(projInfo);
    const [isExpand, setIsExpand]=useState(false);

    const handleExpand=()=>{
        setIsExpand(!isExpand);
    }
    
    const renderProjTxt=()=>{
        return <Typography>{projInfo.projDesc}</Typography>
    }
    const renderTechList=()=>{
        console.log(projInfo.projTech)
        const jsx=projInfo.projTech.map(tech=><FontAwesomeIcon icon={["fab",tech]} key={projInfo.projTitle+tech}/>);
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
        const liveButt=projInfo.projLive!==""?<Button href={projInfo.projLive} variant="contained" target="_blank" rel="noreferrer">Live</Button>:null;
        const srcButt=projInfo.projSrc!==""?<Button href={projInfo.projSrc} variant="contained" target="_blank" rel="noreferrer">Src Code</Button>:null;
        return (
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={3}
            >
                {liveButt}
                {srcButt}
            </Stack>
        )
    }
    // TODO: convert projTech to jsx array of font awesome icons

    return (   
        <Card className="projItem">
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
                <Typography variant="h4">{projInfo.projTitle}</Typography>
                {isExpand?renderProjTxt():null}
            </CardContent>
            </CardActionArea>
            {isExpand?renderProjButt():null}
        </Card>
    )
}

export default ProjectItem;