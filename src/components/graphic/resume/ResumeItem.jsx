import React from 'react';
import classes from "../resume/Resume.module.css";

const ResumeItem = (props) => {
    return (
        <div className={classes.resumeItem} {...props}>
            <h2 className={classes.resumeColumnTitle}>{props.ritem.chapter}</h2>
            <h3 className={classes.RItemTitle}>{props.ritem.title}</h3>
            <p className={classes.RItemDes}>{props.ritem.desc}</p>
        </div> 
    );
};

export default ResumeItem;

// rI={{chapter:'',title:'', desc:''}}