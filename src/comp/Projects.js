import React, {useState,useEffect} from 'react';

import ProjectItem from './ProjectItem';

import Typography from '@mui/material/Typography';
const Projects=()=>{
    const [projJsx, setProjJsx]=useState(null);

    useEffect(()=>{
        fetch("./projs.json").then((data)=>data.json()).then(({projs})=>{
            setProjJsx(projs);
        }).catch((e)=>console.log(e))

    },[]);
    const projsToJsx=()=>{
        if (projJsx==null){
            return null;
        }
        return projJsx.map(proj=>{
            return <ProjectItem 
                projInfo={proj.projInfo}
                key={proj.projTitle}
        />});
    }

    return (
        <div className="projectCont" id="projects">
            <Typography variant="h4">Projects</Typography>
            {projsToJsx()}
        </div>
    )
}


export default Projects;