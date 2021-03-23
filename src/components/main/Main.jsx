import UserDetails from './users/UserDetails';
import { Route, Switch, useParams } from 'react-router-dom';
import TopicsContent from './topics/TopicsContent';
import LinksContent from './links/LinksContent';
import AboutContent from './about/AboutContent';
import Secured from '../secured/Secured';
import LandingPage from '../landing/LandingPage';
import FilterableImages from '../FilterableImages';
import SignUp from '../signup/SignUp';
import { images } from '../../data/content.json';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

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
                <Route path="/image/:id" children={<Child />} /> 
                <Route path="/about">
                    <AboutContent />
                </Route>                   
            </Switch >
        </main >
    );
};
export default Main;

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
 
    return (
        <div>
        <h3>ID: {id}</h3>
        <Grid container className="classes.container">
        {Array.isArray(images) && images.length > 0 ? (
            images.map((data, index) => (
                <div key ={index}>
                <Grid item xs={12} className="classes.missioncontextcontainer">
                    <Box  width="100%" alignItems="center" textAlign="center" m={10}  fontFamily="Orbitron" fontStyle="sans-serif">
                        {data.imageurl && data.id == id ? <a href={data.imageurl}  target="_blank" rel="noreferrer">{data.imageurl}"</a> : <div/> }                    
           
                        {data.description && data.id == id ? <p> {data.description} </p> : <div/> }                    
                        {data.imageurl && data.id == id ? <img src={data.imageurl} width="400" height="400" minwidth="400" key={data.id}></img> : <p/> }
                    </Box>
                </Grid>
                </div>
            ))
            ): (
                <Grid container item xs={6}>
                <h1>No image found</h1>
                </Grid>
            )
            }
        </Grid>
        </div>      
    );
}