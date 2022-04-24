// EXTERNAL
// react
import React, {useState, useEffect} from 'react';

// MUI components
import Typography from '@mui/material/Typography';

// INTERNAL
// individual project component
import ProjectItem from './ProjectItem';
// sort component
import Sorter from './Sorter';
import Searcher from './Searcher';

// json file of all notable projects
import projData from '../projs.json';

import '../stylesheets/Projects.scss';

// possible sort orders
const ACCEPTED_ORDERINGS=["alph","rev_alph","newest","oldest"];
const INVALID_CHAR_REG=/\W/;
const Projects=()=>{
    // the project array
    const [proj, setProj]=useState(projData.projs);
    // the string to filter project array with
    const [filterStr, setFilterStr]=useState("");
    const [isInvalid, setIsInvalid]=useState(false);
    // the order to sort project array in
    const [order, setOrder]=useState("newest");


    useEffect(()=>{
        if (!proj){
            return;
        }
        let newProj=proj.map(a => {return {...a}});
        if (order===ACCEPTED_ORDERINGS[0]){
            newProj=newProj.sort((a,b)=>{
                return a.projInfo.projTitle.localeCompare(b.projInfo.projTitle);
            })
        }
        else if (order===ACCEPTED_ORDERINGS[1]){    
            newProj=newProj.sort((a,b)=>{
                return b.projInfo.projTitle.localeCompare(a.projInfo.projTitle);
            })

        }
        else if (order===ACCEPTED_ORDERINGS[2]){
            newProj=newProj.sort((a,b)=>{
                return parseInt(b.projInfo.projId)-parseInt(a.projInfo.projId);
            })
        }
        else if (order===ACCEPTED_ORDERINGS[3]){
            newProj=newProj.sort((a,b)=>{
                return parseInt(a.projInfo.projId)-parseInt(b.projInfo.projId);
            })
        }
        setProj(newProj);

    },[order]);

    useEffect(()=>{
        if (INVALID_CHAR_REG.test(filterStr)){
            setIsInvalid(true);
        }
        else {
            setIsInvalid(false);
        }
    },[filterStr]);

    const handleFilterChange=(newInputEvent)=>{

        setFilterStr(newInputEvent.target.value);
    }

    const handleOrderChange=(newOrderEvent)=>{

        if (ACCEPTED_ORDERINGS.indexOf(newOrderEvent.target.value)!==-1){
            
            setOrder(newOrderEvent.target.value);
        }
    }
    const projsToJsx=()=>{
        if (proj==null){
            return null;
        }

        // newest project first
        // TODO: implement sort / search / filter function
        return proj
        .filter((proj)=>{
            if (!isInvalid){
                if (proj.projTitle.contains(filterStr)){
                    return true;
                }
                else{
                    for (const tech of proj.projTech){
                        if (tech.contains(filterStr)){
                            return true;
                        }
                    }
                }

            }

            return false;
        })
        .map((proj,ind)=>{
            const leKey=`proj${proj.projInfo.projId}`;

            return <ProjectItem 
                projInfo={proj.projInfo}
                key={leKey}
        />});
    }

    return (
        <div className="Projects" id="projects-sect">
            <Typography variant="h4">Projects</Typography>
            <div id="proj-app-bar">
                <Searcher searchString={filterStr} handleChange={handleFilterChange} isInvalidInput={isInvalid} />
                <Sorter order={order} handleChange={handleOrderChange} />
            </div>
            <div className="ProjContainer">
                {projsToJsx()}
            </div>
        </div>
    )
}


export default Projects;