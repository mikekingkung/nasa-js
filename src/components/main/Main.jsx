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
import { makeStyles } from '@material-ui/core/styles';

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
 
    const useStyles = makeStyles((theme) => ({
        container: {
          height: "100%",
          width: '100%',
          padding: "10px"
         },
         missioncontextcontainer: {
           display: "flex",
           flexDirection: "row",
           justifyContent: "space-between",
           height: "100%",
           width: "100%",
           flex: 1,
           backgroundColor: "black",
           color: "red",
           padding: "20",
           minwidth: "200"
          },
      }));

    const classes = useStyles();  
    return (
        <div>
        <Grid container className="classes.container">
        {Array.isArray(images) && images.length > 0 ? (
            images.map((data, index) => (
                <Grid item xs={12} className="classes.missioncontextcontainer">
                    <Box  key ={index} width="100%" alignItems="left" textAlign="left" m={1}  fontFamily="Orbitron" fontStyle="sans-serif">
                        {data.title && data.id == id ? <p>{data.title}</p> : ''}    
                        {data.imageurl && data.id == id ? <img src={data.imageurl}  key={data.id}></img> :'' }                                        
                        {data.credit && data.id == id ? <p>{data.credit}</p> : '' }                    
                        {data.description && data.id == id ? <p> {data.description} </p> : '' }                    
                        
                    </Box>
                </Grid>
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