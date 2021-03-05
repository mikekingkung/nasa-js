import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const TopicsContent = () => {
  const useStyles = makeStyles((theme) => ({
    landingpage: {
      height: "100%",
    },
    container: {
      height: "100%",
      width: '100%',
      padding: "10px"
     },
     missionknowledecontainer: {
       width: "100%",
       minHeight: "100%"
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
     recentknowledgecontainer: {
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
       height: "100%",
       width: "100%",
       flex: 1,
       padding: "10px",
       backgroundColor: "black",
       color: "red",
      },
      textfield: {
        border: "1px solid blue",
      },
      imageorvideo: {
        padding: "20",
        minwidth: "200"
      }
  }));

  const classes = useStyles();
    return (
      <div>
        <Grid container className="classes.container">
          <Grid item xs={12} className="classes.missioncontextcontainer">               
             <h2>Topics</h2>
          </Grid>
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/topics/humans-in-space" target="_blank" rel="noreferrer">Humans in space</a>
          </Grid>
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/topics/moon-to-mars" target="_blank" rel="noreferrer">Moon to Mars</a>
          </Grid>
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/topics/earth/index.html" target="_blank" rel="noreferrer">Earth</a>
          </Grid>
          <Grid item xs={12} className="classes.missioncontextcontainer">          
             <a href = "https://www.nasa.gov/topics/technology/index.html" target="_blank" rel="noreferrer">Technology</a>
          </Grid>
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/topics/aeronautics/index.html" target="_blank" rel="noreferrer">Aeronautics</a>
          </Grid>               
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "nasa.gov/topics/solarsystem/index.html" target="_blank" rel="noreferrer">Solar System</a>
          </Grid>               
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/stem" target="_blank" rel="noreferrer">STEM</a>
          </Grid>
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/topics/benefits/index.html" target="_blank" rel="noreferrer">Benefits</a>
          </Grid>
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <h2>Missions</h2>
          </Grid>
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/specials/artemis/" target="_blank" rel="noreferrer">Artemis</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/exploration/commercial/crew/index.html" target="_blank" rel="noreferrer">Commercial Crew Program</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/mission_pages/msl/index.html" target="_blank" rel="noreferrer">Curiosity Mars Rover</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/mission_pages/hubble/main/index.html" target="_blank" rel="noreferrer">Hubble Space Telescope</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
            <a href = "https://www.nasa.gov/mission_pages/webb/main/index.html" target="_blank" rel="noreferrer">James Webb Space Telescope</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
            <a href = "https://www.nasa.gov/mission_pages/juno/main/index.html" target="_blank" rel="noreferrer">Juno: Mission Jupiter</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/mission_pages/station/main/index.html" target="_blank" rel="noreferrer">International Space Station</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
             <a href = "https://www.nasa.gov/mission_pages/insight/main/index.html" target="_blank" rel="noreferrer">Insight Mars Lander</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
            <a href = "https://www.nasa.gov/perseverance" target="_blank" rel="noreferrer">Insight Mars Lander</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
            <a href = "https://www.nasa.gov/mission_pages/newhorizons/main/index.html" target="_blank" rel="noreferrer">New Horizons</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
            <a href = "https://www.nasa.gov/osiris-rex" target="_blank" rel="noreferrer">Osiris Rex</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
            <a href = "https://www.nasa.gov/content/goddard/parker-solar-probe" target="_blank" rel="noreferrer">Parker Solar Probe</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
            <a href = "https://www.nasa.gov/launchschedule/" target="_blank" rel="noreferrer">Launch Schedule</a>
          </Grid> 
          <Grid item xs={12} className="classes.missioncontextcontainer">
            <a href = "https://www.nasa.gov/missions" target="_blank" rel="noreferrer">Missions A-Z</a>
          </Grid> 
         </Grid>
      </div>
     );
};

















export default TopicsContent;  


