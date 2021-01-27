import HomeContent from './home/HomeContent';
import { Route, Switch } from 'react-router-dom';
import TopicsContent from './topics/TopicsContent';
import LinksContent from './links/LinksContent';
import AboutContent from './about/AboutContent';
import RegisterContent from './users/RegisterContent';
import Login from './users/Login';
//import DetailsContent from './movieDetails/DetailsContent';
//import PrivateRoute from '../auth/PrivateRoute';

//import ProfilePage from './profile/ProfilePage';

const Main = () => {
    return (
        <main className="container">
            <Switch>
                <Route exact path="/">
                    <HomeContent />
                </Route>
                <Route path="/topics">
                    <TopicsContent />
                </Route>
                <Route path="/links">
                    <LinksContent />
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <RegisterContent/>
                </Route>
                <Route path="/about">
                    <AboutContent />
                </Route>
            </Switch >
        </main >
    );
};
export default Main;
