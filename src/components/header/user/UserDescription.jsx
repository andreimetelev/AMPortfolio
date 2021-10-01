import React from 'react';
import classes from "../user/User.module.css";

const UserDescription = (props) => {
    return (
        <div className={classes.userDesc} {...props}>
        <h2 className={classes.userName}> {props.desc.Username}</h2>
        <h3 className={classes.userSurname}> {props.desc.Surname}</h3>
        <h4 className={classes.userProf}> {props.desc.Prof}</h4>
        </div>
    );
};

export default UserDescription;