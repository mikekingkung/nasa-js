import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import './DisplayImages.css'

const DisplayImages = ({ images, searchText, advanced, isLoaded, handleButtonPress}) => {

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
            <p>Search Results:</p>
            <Grid container className="classes.container">
            {Array.isArray(images) && images.length > 0 ? (
                images.map((data, index) => (
                  <div key ={index}>
                    <Grid item xs={12} style={{ padding: 20 }}>
                      <Typography component="div">
                        <Box style={{ border: "1px solid blue", margin: "10px"}} textAlign="justify" m={10} fontFamily="Orbitron" fontStyle="sans-serif">
                        {data.button ?
                          (<Button style={{ border: "1px solid blue", backgroundColor: "white", color: "red"}}  key={index}>
                            <div data-testid="markedForSave" >Details Marked For Save</div>
                          </Button>)
                          :
                          (
                            (<Button style={{ border: "1px solid blue", backgroundColor: "white", color: "red"}} key={index}  onClick={(e) => handleButtonPress(e, images, index)}>
                            <div data-testid="saveDetails">Save Details </div>
                          </Button>)  
                          )}
                        {data.image ? <p  data-testid="imageTitle" style={{ padding: 20 }}> {data.image.title} </p> : <div/> }
                        {data.video ? <p  data-testid="videoTitle" style={{ padding: 20 }}>{data.video.title} </p> : <div/> } 
                        <br/> 
                      </Box>
                      </Typography>    
                    </Grid>                     
                    <Grid container spacing={6} className="classes.container">
                      <Grid item xs={6} className="classes.missioncontextcontainer">
                      <Typography component="div">
                        <Box style={{ border: "1px solid blue", margin: "10px"}} width="100%" textAlign="left" m={10}  fontFamily="Orbitron" fontStyle="sans-serif">
                       {data.image ? <p data-testid="imageDescription" style={{ padding: 20 }}>{data.image.description}</p> :<div/> }
                       {data.video ? <p data-testid="videoDescription" style={{ padding: 20 }}>{data.video.description}</p> : <div/> }
                       </Box> 
                       </Typography>                     
                    </Grid>
                    <Grid item xs={6} className="classes.missioncontextcontainer">
                        <Box style={{ border: "1px solid blue", margin: "10px"}} width="100%" alignItems="center" textAlign="center" m={10}  fontFamily="Orbitron" fontStyle="sans-serif">
                      {data.image ? <img data-testid="imageImg" src={data.image.url} alt="image" width="400" height="400" minwidth="400" key={data.image.id}></img> : <p/> }
                      {data.video ? <video data-testid="videoVideo" src={data.video.url} width="400" height="400" minwidth="400" controls> key={data.video.id} </video> : <br/> }
                      </Box> 
                    </Grid>
                  </Grid>
                  </div>
                ))
              ): (
                  <Grid container item xs={6}>
                    <h1>No Search Results Found</h1>
                  </Grid>
                )
              }
            </Grid>
          </div>
  )
};

export default DisplayImages;
