import React from 'react';
import classes from "../resume/Resume.module.css";

const ResumeItem = (props) => {
    return (
        <div className={classes.resumeItem} {...props}>
            <h2 className={classes.resumeColumnTitle}>{props.RItem.chapter}</h2>
            <h3 className={classes.RItemTitle}>{props.RItem.title}</h3>
            <p className={classes.RItemDes}>{props.RItem.desc}</p>
        </div> 
    );
};

export default ResumeItem;

// RItem={{chapter:'',title:'', desc:''}}