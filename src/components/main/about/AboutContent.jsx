import React from 'react';
import aboutcontentimage from '../../../images/aboutcontentimage.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const AboutContent = () => {

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
           minWidth: "200"
          }
      }));

    return (
        <div>
        <Grid container xs={12} className="classes.container">
          <Grid item xs={12}  justify="left" alignItems ="left" className="classes.missioncontextcontainer">               
             <p>This application makes use of the NASA Open API for images. Content is allowed to be displayed under Nasa Copyright</p>
          </Grid>
        </Grid>
        <img
            className="img-fluid"
            src= {aboutcontentimage}
            alt="Learn Space Ltd"
        />
        </div>
    );
}

export default AboutContent;