import React from 'react';
import classes from "../sections/Section.module.css";

const SectionTitle = (props) => {
    return (
        <div className={classes.Sec__greetings} {...props}>
            <h3 className={classes.SecTitle}>{props.SecTitle.title}</h3>
            <h4 className={classes.SecObj}>{props.SecTitle.objective}</h4>
        </div>
    );
};

export default SectionTitle;

// SecTitle={{title:'Main Page', objective:'Welcome to my website. Here I will talk about myself and my development experience.'}}