import React from 'react';
import classes from "../user/User.module.css";
import Avatar from '../avatar/Avatar';
import UserDescription from '../user/UserDescription';

const User = () => {
    return (
        <div className={classes.user} >
            <Avatar/>
            <UserDescription desc={{Username: 'Andrei', Surname: 'Metelev', Prof: 'Front End Developer'}}/>
        </div>
    );
};

export default User;