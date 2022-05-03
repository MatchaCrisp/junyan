// EXTERNAL
// react
import React, {useEffect,useState,useRef} from 'react';
// mui
import Typography from '@mui/material/Typography';

// INTERNAL
// components
import BannerStar from './BannerStar';
// hook
import useContainerDims from '../hook/useContainerDims';

// stylesheets
import '../stylesheets/Banner.scss';
// starry night backdrop
const Banner=()=>{
    const bannerRef=useRef();
    const {width, height} = useContainerDims(bannerRef);
    // star array
    const [stars, setStars]=useState([]);

    
    // on component mount generate stars
    // star properties:
    /* {
        xPos:int=location in terms of % of banner width,
        yPos:int=location in terms of % of banner height,
        rad:int=radius of star (px),
        minOpacity:int=minimum % opacity of star,
        maxOpacity:int=maximum % opacity of star,
        glowCycleDuration:int= duration of one glowing cycle (s),
        glowCyclePattern:int=one of 30 patterns
    } */
    useEffect(()=>{
        // generates a number between a and b inclusive
        const generateNumInclusive=(a,b)=>{
            if (a && b){
                return Math.floor(Math.random()*(Math.abs(b-a)+1))+a;
            }
            return Math.floor(Math.random()*101);
        }
        // generates a random list of attributes for a star
        const generateRandomStarAttr=()=>{
            let currStar={
                xPos:0,
                yPos:0,
                rad:0,
                minOpacity:0,
                maxOpacity:0,
                glowCycleDuration:0,
                glowCyclePattern:[],
                k:0
            };
            // x position can be 1%-99% of banner width 
            currStar.xPos=generateNumInclusive(1,99);
            // y position can be 1%-99% of banner height
            currStar.yPos=generateNumInclusive(1,99);
            // star radius can be between 1 and 3 px
            currStar.rad=generateNumInclusive(1,3);
            // star minimum opacity between 20 - 49%
            currStar.minOpacity=generateNumInclusive(20,49);
            // star maximum opacity between 50 - 80%
            currStar.maxOpacity=generateNumInclusive(50,80);
            // star glow duration
            currStar.glowCycleDuration=generateNumInclusive(7,16);
            // star glow pattern
            currStar.glowCyclePattern=[generateNumInclusive(1,3),generateNumInclusive(1,10)];
            currStar.k=`${currStar.xPos}-${currStar.yPos}-${currStar.rad}-${currStar.minOpacity}-${currStar.maxOpacity}-${currStar.maxOpacity}-${currStar.glowCyclePattern}`;
            return currStar;
        }
        // between 200 to 399 stars
        const numStars=Math.floor(Math.random()*200)+200;
        let newStars=[];

        for (let i = 0; i < numStars; i++){
            let newStar=generateRandomStarAttr();
            newStars.push(newStar);
        }
        setStars(newStars);
    },[])

    const generateStars=()=>{
        return stars.map((star)=>{
            return <BannerStar starAttr={star} bannerW={width} bannerH={height} key={star.k}/>
        })

    }

    return (
        <div ref={bannerRef} id="banner-sect">
            <div id="banner-text">
                <Typography variant="h2" id="banner-sect-name">Junyan Ye</Typography>
                <Typography variant="h4" id="banner-sect-title">Frontend Developer</Typography>
            </div>
            <div id="banner-stars">
                {generateStars()}
            </div>
            
        </div>
    )
}

export default Banner;