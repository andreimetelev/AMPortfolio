import React from 'react';
import classes from "../header/Header.module.css";
import User from './user/User';
import Nav from './navbar/Nav';

const Header = (props) => {
    return (
        <header className={classes.header} {...props}>
        <User/>
        <Nav/>
        </header>
    );
};

export default Header;