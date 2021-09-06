import React from 'react';
import classes from "../../sections/Section.module.css";


const IntroPart = ({children, ...props}) => {
    return (  
            <div className={classes.intro__content} {...props}>
                <img className={classes.intro__photo} src="./images/work/1.png" alt="1" />
                <img className={classes.intro__photo} src="./images/work/2.png" alt="2" />
                <img className={classes.intro__photo} src="./images/work/3.png" alt="3" />
           </div> 
        );
    };

export default IntroPart;