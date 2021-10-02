import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import AboutMe from "../../pages/AboutMe";
import Work from "../../pages/Work";


const MyRouter = () => {
    return (
        <Switch>
        <Route exact path="/mainPage">
            <MainPage/>
        </Route>
        <Route path="/about">
            <AboutMe/>
        </Route>
        <Route path="/work">
            <Work/>
        </Route>
        <Redirect exact to="/mainPage"/>
        </Switch>
    );
};

export default MyRouter;