import {useState,useEffect} from 'react';
// hook that:
// given a component reference
// returns its dimensions (height and width) at any time until unmount
const useContainerDims = myRef => {

  
  
  

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // get current component dimensions
  const getDimensions = () => ({
    width: myRef.current.offsetWidth,
    height: myRef.current.offsetHeight
  })    
  // callback when size of component changes
  const handleResize = () => {
    setDimensions(getDimensions())
  }
    if (myRef.current) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [myRef])

  return dimensions;
};

export default useContainerDims;