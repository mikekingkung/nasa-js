import UserDetails from './users/UserDetails';
import { Route, Switch } from 'react-router-dom';
import TopicsContent from './topics/TopicsContent';
import LinksContent from './links/LinksContent';
import AboutContent from './about/AboutContent';
import Secured from '../secured/Secured';
import LandingPage from '../landing/LandingPage';
import FilterableImages from '../FilterableImages';
import SignUp from '../signup/SignUp';

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
                <Route path="/userdetails">
                    <UserDetails />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route> 
                <Route path="/about">
                    <AboutContent />
                </Route>                   
            </Switch >
        </main >
    );
};
export default Main;
