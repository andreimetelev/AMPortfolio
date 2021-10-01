import React from 'react';
import classes from "../avatar/Avatar.module.css";
import ava from "../../../image/avatar/2.jpg";

const Avatar = ({children, ...props}) => {
    return ( 
        <img {...props} className={classes.avatar} src={ava} alt="ava"/>
    );
};

export default Avatar;