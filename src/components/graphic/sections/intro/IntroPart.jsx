import React from 'react';
import classes from "../../sections/Section.module.css";


const IntroPart = ({children, ...props}) => {
    return (  
            <div className={classes.intro__content}>
            <div className={classes.intro__photo} {...props}>
                <img className={classes.intro__img} src="./images/bg/section1.jpg" alt="1" />
           </div>
           <div className={classes.intro__photo} {...props}>
                <img className={classes.intro__img} src="./images/bg/section2.jpg" alt="1" />
           </div>
           <div className={classes.intro__photo} {...props}>
                <img className={classes.intro__img} src="./images/bg/section3.jpg" alt="1" />
           </div>
           </div>
        );
    };

export default IntroPart;