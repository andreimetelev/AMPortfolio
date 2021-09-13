import React from 'react';
import classes from "../user/User.module.css";
import Avatar from '../avatar/Avatar';
import UserDescription from './UserDescription';

const User = () => {
    return (
        <div className={classes.user}>
            <Avatar src="./images/Avatar/2.JPG" alt="1"/>
            <UserDescription desc={{Username: 'Andrei', Surname: 'Metelev', Prof: 'Front End Developer'}}/>
        </div>
    );
};

export default User;