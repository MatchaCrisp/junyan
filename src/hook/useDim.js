import {useState, useEffect} from 'react';

//hook for tracking viewport size & calculate bar width and separation width

//props: len: length of dataset
//       max: max of dataset
//       xRatio: percentage of viewport width taken up by graph
//       yRatio: percentage of viewport height taken up by graph

//returns object
//return order: gWidth:graphWidth, gHeight:graphHeight, barW:barWidth, barSep:barSeparator, barH:barHeightMult
const useDim=()=>{
    //grab dimensions of viewport
    const getDim=()=>{
      const {innerWidth:windW,innerHeight:windH}=window;

      return {gWidth:windW,gHeight:windH};
    }

    const handleResize=()=>{
      setDim(getDim());
    }


    //initialize to viewport size on open
    const [dim,setDim]=useState(getDim());
    //add listener for resize on mount/remove on unmount
    useEffect(()=>{
      window.addEventListener('resize',handleResize);
      return ()=>window.removeEventListener('resize',handleResize);
    });
  
    return dim;
  }
  
  export default useDim;