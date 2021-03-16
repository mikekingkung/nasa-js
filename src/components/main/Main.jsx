import UserDetails from './users/UserDetails';
import { Route, Switch } from 'react-router-dom';
import TopicsContent from './topics/TopicsContent';
import LinksContent from './links/LinksContent';
import AboutContent from './about/AboutContent';
import Secured from '../secured/Secured';
import LandingPage from '../landing/LandingPage';
import SignUpContent from '../signup/SignUpContent';
import FilterableImages from '../FilterableImages';
import Form from '../signup/Form';
import React, { useState, useEffect } from 'react';

import { QUERY } from '../../constants/constants.json';

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
                <Route path="/form">
                    <Form />
                </Route>                    
            </Switch >
        </main >
    );
};
export default Main;
