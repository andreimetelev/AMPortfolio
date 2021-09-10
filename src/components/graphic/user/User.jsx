import React from 'react';
import classes from "../user/User.module.css";
import Avatar from '../avatar/Avatar';
import UserDescription from './UserDescription';

const User = (props) => {
    return (
        <div className={classes.user} {...props} >
            <Avatar src="./images/Avatar/IMG_7122.JPG" alt='1'/>
            <UserDescription desc={{Username: 'Andrei', Surname: 'Metelev', Prof: 'Front End Developer'}}/>
        </div>
    );
};

export default User;