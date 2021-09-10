import React from 'react';
import classes from "../resume/Resume.module.css";

const ResumeTitle = (props) => {
    return (
        <div {...props}>
            <h3 className={classes.resumeTitle}>{props.resume.title}</h3>
            <h4 className={classes.RTitleObj}>{props.resume.objective}</h4>
        </div>
    );
};

export default ResumeTitle;
