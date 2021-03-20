import React from 'react';
import aboutcontentimage from '../../../images/aboutcontentimage.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { content } from '../../../data/content.json';

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
           minwidth: "200"
          }
      }));

      const className = useStyles();

    return (
        <div>
        <Grid container className="classes.container">
          <Grid item xs={12} className="classes.missioncontextcontainer">               
             <p>{content.about_copyright}</p>
             <p>{content.about_discover}</p>
             <p>{content.about_topics}</p>
             <p>{content.about_links}</p>
             <p>{content.about_secured}</p>
             <p>{content.about_user_details}</p>

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