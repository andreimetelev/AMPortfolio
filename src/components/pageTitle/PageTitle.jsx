import React from 'react';
import classes from "../pageTitle/PageTitle.module.css";

const PageTitle = (props) => {
    return (
        <div className={classes.pageChapter} {...props}>
            <h3 className={classes.pageTitle}>{props.page.title}</h3>
            <h4 className={classes.pageObj}>{props.page.objective}</h4>
        </div>
    );
};

export default PageTitle;

// page={{title:'', objective:''}}