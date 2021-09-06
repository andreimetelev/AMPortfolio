import React from 'react';
import classes from "../resume/Resume.module.css";
import ResumeTitle from './ResumeTitle';
import ResumeBody from './ResumeBody';

const Resume = (props) => {
    return (
        <div className={classes.resume} {...props}>  
        <ResumeTitle RTitle={{title:'My Resume', objective:'Junior Front End Developer'}}/>
        <ResumeBody/>
        </div>
    );
};

export default Resume;