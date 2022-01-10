import React, {useState,useEffect} from 'react';

import ProjectItem from './ProjectItem';

import Typography from '@mui/material/Typography';

import '../stylesheets/Projects.scss';
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
        return projJsx.reverse().map((proj,ind)=>{
            const leKey=`proj${proj.projInfo.projId}`;

            return <ProjectItem 
                projInfo={proj.projInfo}
                key={leKey}
        />});
    }

    return (
        <div className="project-sect" id="projects">
            <Typography variant="h4">Projects</Typography>
            <div className="proj-container">
                {projsToJsx()}
            </div>
        </div>
    )
}


export default Projects;