// EXTERNAL
// react
import React, {useState} from 'react';

// MUI components
import Typography from '@mui/material/Typography';

// INTERNAL
import ProjectItem from './ProjectItem';
import projData from '../projs.json';
import '../stylesheets/Projects.scss';

const Projects=()=>{
    const [projJsx, setProjJsx]=useState(projData.projs);

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