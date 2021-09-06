import React from 'react';
import classes from "../sections/Section.module.css";

const SectionContent = ({children, ...props}) => {
    return (       
        <section className={classes.section__content} {...props}>
            {children}
        </section>
        );
    };

export default SectionContent;


