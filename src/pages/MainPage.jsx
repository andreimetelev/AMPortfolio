import React from "react";
import classes from "../pages/PagesStyles.module.css";
import BgImg from "../image/bg/main/1.jpg";
import PageTitle from "../components/pageTitle/PageTitle";
import { Link } from 'react-router-dom';
import Bgwork from "../image/bg/mainCards/bgWork.jpg";
import BgHobby from "../image/bg/mainCards/bgHobby.jpg";

function MainPage() {
  
  return (
        <div className={classes.main__page}>
            <div className={classes.page__bg__img} style={{backgroundImage: `url(${BgImg})` }}></div>
            <PageTitle page = {{title:'Hello I`m Andrei Metelev. Welcome to my website', objective:'Here I will talk about myself and my development experience.'}}/>
            <div className={classes.main__cards}>
            
            <Link className={classes.work__link} to="/work">
            <div className={classes.CardsBg__img} style={{backgroundImage: `url(${Bgwork})` }}></div>
                <h3 className={classes.work__text}>This block contains information about my previous work experience.</h3>
            </Link>
            <Link className={classes.about__link} to="/about">
            <div className={classes.CardsBg__img} style={{backgroundImage: `url(${BgHobby})` }}></div>
                <h3 className={classes.hobby__text}>This block contains information about my hobbies and interests.</h3>
            </Link>
            </div> 
        </div>
  );
}

export default MainPage;

