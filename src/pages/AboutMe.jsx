import React from 'react';
import classes from "../pages/PagesStyles.module.css";
import '../styles/App.css';
import BgImg from "../image/bg/hobby/1.jpg";
import PageTitle from "../components/pageTitle/PageTitle";

const AboutMe = () => {
    return (
        <div>
            <div className={classes.page__bg__img} style={{backgroundImage: `url(${BgImg})` }}></div>
            <PageTitle page = {{title:'My Hobbies and Interests', objective:'This section is under development and so far there is nothing interesting here. In the future, I will add some interesting material here.'}}/>
        </div>
       
    );
};

export default AboutMe;