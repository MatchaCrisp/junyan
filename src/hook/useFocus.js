import React, { useState,useEffect } from "react";



const useFocus = () => {
    const [isInFocus,setIsInFocus]=useState(true);
    useEffect(() => {
        const onFocus=()=>{
            setIsInFocus(true);
        }
        const onBlur=()=>{
            setIsInFocus(false);
        }
        window.addEventListener("focus", onFocus);
        window.addEventListener("blur", onBlur);
        // Calls onFocus when the window first loads
        onFocus();
        // Specify how to clean up after this effect:
        return () => {
            window.removeEventListener("focus", onFocus);
            window.removeEventListener("blur", onBlur);
        };
  }, []);

    return isInFocus;
};

export default useFocus;