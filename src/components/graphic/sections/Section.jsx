import React from 'react';
import classes from "../sections/Section.module.css";

const Section = ({children, ...props}) => {
    return (
        <section className={classes.section} {...props}>
            {children}            
        </section>
        );
    };

export default Section;