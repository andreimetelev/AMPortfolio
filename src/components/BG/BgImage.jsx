import React from 'react';
import classes from "../SectionBGImage/SectionBgImage.module.css";
import BgImg from "../../image/bg/map-of-the-world-2401458.jpg";

const SectionBGImage = ({children, ...props}) => {
    return (  
        <div className={classes.bg__img} style={{backgroundImage: `url(${BgImg})` }} {...props}></div>
        );
    };

export default SectionBGImage;