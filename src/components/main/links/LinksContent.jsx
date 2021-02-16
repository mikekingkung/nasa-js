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
          minWidth: "200"
        },
    }));
     
    const classes = useStyles();
    return (
      <div>
        <Grid container xs={12} >
          <Grid item xs={12}  justify="left" alignItems ="left" className="classes.missioncontextcontainer">               
              <h2>Topics</h2>
          </Grid>
          <Grid item xs={12}  justify="left" alignItems ="left" className="classes.missioncontextcontainer">
              <a href = "https://www.nasa.gov/topics/humans-in-space" target="_blank" rel="noreferrer">Humans in space</a>
          </Grid>
          <Grid item xs={12}  justify="left" alignItems ="left">
              <ReviewContent/>
          </Grid>

          </Grid>
      </div>
      );
};

export default LinksContent;

