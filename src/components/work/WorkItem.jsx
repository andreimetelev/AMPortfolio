import React from "react";
import classes from "../work/WorkItem.module.css";
import MyBtn from '../UI/button/MyBtn';

const WorkItem  = (props) => {
    return (
        <div className={classes.work__item}>

        <div className={classes.work__index}>
            <h4>{props.number}.</h4>
            <h4>{props.work.start}</h4>
            <h4>{props.work.ending}</h4>
        </div>
        
        <div className={classes.work__description}>
        <div className={classes.work__title}>
            <h3>{props.work.title}</h3>
        </div>

        <div className={classes.work__text}>
            <h3>{props.work.description}</h3>
        </div>
        </div>
        
        <div className={classes.work__btns}>
        <MyBtn>Open</MyBtn>
        <MyBtn onClick={() => props.hide(props.work)}>Hide</MyBtn>
        </div>  
</div>
    );
};

export default WorkItem;
