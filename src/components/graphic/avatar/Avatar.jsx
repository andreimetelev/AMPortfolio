import React from 'react';
import classes from "../avatar/Avatar.module.css";

const Avatar = (props) => {
    return (
        <img  className={classes.avatar} {...props} /> 
    );
};

export default Avatar;