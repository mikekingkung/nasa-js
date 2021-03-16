import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReviewContent from '../../ReviewContent';

const LinksContent = () => {
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
        <Grid container spacing={3}>
          <Grid item xs={12} className="classes.missioncontextcontainer">               
              <h2>Links</h2>
          </Grid>
          <Grid item xs={12}  className="classes.missioncontextcontainer">
              <a href = "https://www.nasa.gov/topics/humans-in-space" target="_blank" rel="noreferrer">Humans in space</a>
          </Grid>
          <Grid item xs={3} >
              <ReviewContent image="./shuttleImage1.jpg"/>
          </Grid>
          <Grid item xs={3} >
              <ReviewContent image="./shuttleImage2.jpg"/>
          </Grid>
          <Grid item xs={3} >
              <ReviewContent image="./Apollo1.jpg"/>
          </Grid>
          <Grid item xs={3} >
              <ReviewContent image="./Apollo2.jpg"/>
          </Grid>

        </Grid>
      </div>
      );
};

export default LinksContent;

