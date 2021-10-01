import React from "react";
import classes from "../work/WorkItem.module.css";
import MyBtn from '../UI/button/MyBtn';

const WorkItem  = (props) => {
    return (
        <div className={classes.work__item}>

        <div className={classes.work__index}>
            <h3>{props.number}.</h3>
            <div className={classes.workCard__photo}>
                <img className={classes.work__img} src={props.work.img} alt="111"/>
            </div>
            <h4>{props.work.start}/{props.work.ending}</h4>
        </div>
        
        <div className={classes.work__description}>
        <div className={classes.work__title}>
            <h2>{props.work.title}</h2>
        </div>

        <div className={classes.work__text}>
            <h3>{props.work.body}</h3>
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
