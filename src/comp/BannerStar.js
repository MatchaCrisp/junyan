// EXTERNAL
// react spring
import {useSpring, animated, easings} from 'react-spring';

//INTERNAL
// hook
import useFocus from '../hook/useFocus';
// stylesheets
import '../stylesheets/BannerStar.scss';

//component that generates an animated circle simulating a star
    // star properties:
    /* {
        xPos:int=location in terms of % of banner width,
        yPos:int=location in terms of % of banner height,
        rad:int=radius of star (px),
        minOpacity:int=minimum % opacity of star,
        maxOpacity:int=maximum % opacity of star,
        glowCycleDuration:int= duration of one glowing cycle (s),
        glowCyclePattern:int=one of six patterns
    } */
    // props: starAttr, bannerW, bannerH

const EASING_IN_OUT={
    1:"In",
    2:"Out",
    3:"InOut"
}

const EASING_STYLE={
    1:"Back",
    2:"Bounce",
    3:"Circ",
    4:"Cubic",
    5:"Elastic",
    6:"Expo",
    7:"Quad",
    8:"Quart",
    9:"Quint",
    10:"Sine"
}
const BannerStar=({starAttr,bannerW,bannerH})=>{
    let isFocus=useFocus();
    const easingPattern=`ease${EASING_IN_OUT[starAttr.glowCyclePattern[0]]}${EASING_STYLE[starAttr.glowCyclePattern[1]]}`;
    const starProp=useSpring({
        from: {
            opacity:starAttr.minOpacity*0.01,
            boxShadow:`0 0 7px 0 rgba(255,255,255,${starAttr.minOpacity*0.002}), 0 0 14px ${starAttr.minOpacity*0.01} rgba(255,255,255,${starAttr.minOpacity*0.001})`
        },
        to: {
            opacity:starAttr.maxOpacity*0.01,
            boxShadow:`0 0 7px 0 rgba(255,255,255,${starAttr.maxOpacity*0.016}), 0 0 15px ${starAttr.maxOpacity*0.04}px rgba(255,255,255,${starAttr.maxOpacity*0.008})`
        },
        loop:{reverse:true},
        config:{duration:starAttr.glowCycleDuration*1000,
                easing:easings[easingPattern]},
        pause:!isFocus
        
    })
    const starGen=()=>{
        if (starAttr.glowCyclePattern===[]){
            return null;
        }
        return <animated.div className="BannerStar" style={{
            left:starAttr.xPos*0.01*bannerW-starAttr.rad,
            top:bannerH-starAttr.yPos*0.01*bannerH-starAttr.rad,
            width:starAttr.rad,
            height:starAttr.rad,
            ...starProp
        }}
        />
    }
    return (
        starGen()
    )
}

export default BannerStar;