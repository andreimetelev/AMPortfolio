import React from 'react';
import classes from "../user/User.module.css";

const UserInfo = (props) => {
    return (
        <div className={classes.userInfo} {...props}>
        <h2 className={classes.userName}> {props.Info.Username}</h2>
        <h3 className={classes.userSurname}> {props.Info.Surname}</h3>
        <h4 className={classes.userProf}> {props.Info.Prof}</h4>
        </div>
    );
};

export default UserInfo;