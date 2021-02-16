//import HomeContent from './home/HomeContent';
import UserDetails from './users/UserDetails';
import { Route, Switch } from 'react-router-dom';
import TopicsContent from './topics/TopicsContent';
import LinksContent from './links/LinksContent';
import AboutContent from './about/AboutContent';
//import RegisterContent from './users/RegisterContent';
import Secured from '../secured/Secured';
//import Login from './users/Login';
import LandingPage from '../landing/LandingPage';
import SignUpContent from '../signup/SignUpContent';
import FilterableImages from '../FilterableImages';
import React, { useState, useEffect } from 'react';
//import DetailsContent from './movieDetails/DetailsContent';
//import PrivateRoute from '../auth/PrivateRoute';

//import ProfilePage from './profile/ProfilePage';

const Main = () => {
    
    return (
        <main className="container">
            <Switch>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
                <Route path="/discover">
                    <FilterableImages query="moon"/>
                </Route>
                <Route path="/topics">
                    <TopicsContent />
                </Route>
                <Route path="/links">
                    <LinksContent />
                </Route>
                <Route path="/secured">
                    <Secured/>
                </Route>                
                <Route path="/about">
                    <AboutContent />
                </Route>
                <Route path="/signup">
                    <SignUpContent />
                </Route>
                <Route path="/userdetails">
                    <UserDetails />
                </Route>                   
            </Switch >
        </main >
    );
};
export default Main;


{/* <Route path="/login">
<Login/>
</Route>
<Route path="/register">
<RegisterContent/>
</Route> */}
