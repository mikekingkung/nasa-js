import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ReviewContent from '../../ReviewContent';
import { cardcontent } from '../../../data/content.json';

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
          </Grid>

          <Grid item xs={3} >
              <ReviewContent cardscontent={cardcontent}/>
          </Grid>
        </Grid>
      </div>
      );
};

export default LinksContent;

