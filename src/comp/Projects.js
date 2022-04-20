// EXTERNAL
// react
import React, {useState,useEffect} from 'react';

// MUI components
import Typography from '@mui/material/Typography';

// INTERNAL
import ProjectItem from './ProjectItem';

import '../stylesheets/Projects.scss';
const Projects=()=>{
    const [projJsx, setProjJsx]=useState(null);

    // fetch list of personal projects
    useEffect(()=>{
        fetch("./projs.json")
        .then((data)=>data.json())
        .then(({projs})=>{
            setProjJsx(projs);
        }).catch((e)=>console.log(e))

    },[]);
    const projsToJsx=()=>{
        if (projJsx==null){
            return null;
        }
        // newest project first
        // TODO: implement sort / search / filter function
        return projJsx.reverse().map((proj,ind)=>{
            const leKey=`proj${proj.projInfo.projId}`;

            return <ProjectItem 
                projInfo={proj.projInfo}
                key={leKey}
        />});
    }

    return (
        <div className="Projects" id="projects-sect">
            <Typography variant="h4">Projects</Typography>
            <div className="ProjContainer">
                {projsToJsx()}
            </div>
        </div>
    )
}


export default Projects;