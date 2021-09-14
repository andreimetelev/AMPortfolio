import React from 'react';
import classes from "../../sections/Section.module.css";
import img1 from "../../images/bg/section1.jpg";
import img2 from "../../images/bg/section2.jpg";
import img3 from "../../images/bg/section3.jpg";


const IntroPart = ({children, ...props}) => {
    return (  
     <div className={classes.intro__content}>
          <div className={classes.intro__photo} {...props}>
            <img className={classes.intro__img} src={img1} alt="1"/>
          </div>
          <div className={classes.intro__photo} {...props}>
            <img className={classes.intro__img} src={img2} alt="2"/>
          </div>
          <div className={classes.intro__photo} {...props}>
            <img className={classes.intro__img} src={img3} alt="3"/>
          </div>
     </div>
        );
    };

export default IntroPart;