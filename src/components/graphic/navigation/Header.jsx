import React from 'react';
import classes from "../navigation/Header.module.css";
import User from '../../graphic/user/User';
import Nav from '../../graphic/navigation/Nav';

const Header = (props) => {
    return (
        
        <header className={classes.header} {...props}>
        <User/>
        <Nav/>
        </header>
    );
};

export default Header;