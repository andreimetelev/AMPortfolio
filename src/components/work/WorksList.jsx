import React from "react";
import classes from "../work/WorkItem.module.css";
import WorkItem from "./WorkItem";

const WorksList = ({works, title, hide}) => {

    if (!works.length) {
        return(
            <h1 className={classes.works__hidden}>
                No cards found!
            </h1>
        )
    }

    return (
        <div>
            <h1 className={classes.work__profession}>
            {title}
            </h1>
            <div className={classes.work__list}>
            {works.map((work, index) =>
            <WorkItem hide={hide} number={index + 1} work={work} key={work.id}/>
            )}
            </div>
        </div>
    );
};

export default WorksList;