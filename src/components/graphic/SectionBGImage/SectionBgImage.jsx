import React from 'react';
import classes from "../SectionBGImage/SectionBgImage.module.css";
import BgImg from "../SectionBGImage/background/background-6360865.png"

const SectionBGImage = ({children, ...props}) => {
    return (  
        <div className={classes.bg__img} style={{backgroundImage: `url(${BgImg})` }} {...props}></div>
        );
    };

export default SectionBGImage;