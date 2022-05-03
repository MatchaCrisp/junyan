// EXTERNAL
// react
import React from 'react';
// MUI
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';

const ElevScroll=(props)=>{
    const trigger=useScrollTrigger({
        disableHysteresis:true,
        threshold:0,
    });

    return React.cloneElement(props.children, {
        elevation:trigger?4:0,
    });
}

ElevScroll.propTypes={
    children:PropTypes.element.isRequired
}

export default ElevScroll;