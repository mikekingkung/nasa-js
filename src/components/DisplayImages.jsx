import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import './DisplayImages.css'

const DisplayImages = ({ images, searchText, advanced, isLoaded }) => {

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
       minWidth: "200"
       
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
        minWidth: "200"
      }
  }));

  
  const classes = useStyles();
 
console.log("images", images);
console.log("searchText", searchText);

  return (
          <div>
            <Grid container xs={12} className="classes.container">
            {Array.isArray(images) && images.length > 0 ? (
                images.map(data => (
                  <div>
                    <Grid item xs={12} justify="left" alignItems ="left" style={{ padding: 20 }}>
                      <Typography component="div">
                        <Box style={{ border: "1px solid blue", margin: "10px"}} textAlign="justify" m={10} color="#ffffff"  fontFamily="Orbitron" fontStyle="sans-serif">
                        {data.image ? <p style={{ padding: 20 }}> {data.image.title} </p> : <div/> }
                        {data.video ? <p style={{ padding: 20 }}>{data.video.title} </p> : <div/> } 
                        <br/> 
                      </Box>
                      </Typography>    
                    </Grid>                     
                            
                    <Grid container xs={12} spacing={6} className="classes.container">
                      <Grid item xs={6}  justify="left" alignItems ="left" className="classes.missioncontextcontainer">
                      <Typography component="div">
                        <Box style={{ border: "1px solid blue", margin: "10px"}} width="100%" textAlign="left" m={10} color="#ffffff"  fontFamily="Orbitron" fontStyle="sans-serif">
                       {data.image ? <p style={{ padding: 20 }}>{data.image.description}</p> :<div/> }
                       {data.video ? <p style={{ padding: 20 }}>{data.video.description}</p> : <div/> }
                       </Box> 
                       </Typography>                     
                    </Grid>
                    <Grid item xs={6}  justify="center" alignItems ="center" className="classes.missioncontextcontainer">
                        <Box style={{ border: "1px solid blue", margin: "10px"}} width="100%" alignItems="center" textAlign="center" m={10} color="#ffffff"  fontFamily="Orbitron" fontStyle="sans-serif">
                      {data.image ? <img src={data.image.url} alt="image" width="400" height="400" minwidth="400" key={data.image.id}></img> : <p/> }
                      {data.video ? <video src={data.video.url} width="400" height="400" minWidth="400" controls autoplay> </video> : <br/> }
                      </Box> 
                    </Grid>
                  </Grid>
                  </div>
                ))
              ): (
                  <Grid container item xs={6} alignItems="center" justify="center">
                    <h1>No Search Results Found </h1>
                  </Grid>
                )
              };
            </Grid>
            </div>
  )
    };

export default DisplayImages;










// import React, { Fragment, useEffect, useState } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import './DisplayImages.css'
// import axios from 'axios';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// const DisplayImages = () => {

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

//   const [images, setImages] = useState({});

//   useEffect(() => {
//     const data = [
//       {
//        "image": {
//                 "id": "0",
//                 "url": "http://images-assets.nasa.gov/image/PIA19705/PIA19705~large.jpg",
//                 "title": "New Details on Pluto",
//                 "description": "This image of Pluto was taken by New Horizons Long Range Reconnaissance Imager (LORRI) at 4:18 UT on July 9 2015 from a range of 3.9 million miles (6.3 million kilometers). It reveals new details on the surface of Pluto including complex patterns in the transition between the very dark equatorial band (nicknamed The Whale which occupies the lower part of the image and the brighter northern terrain."
//                 }
//       }
//     ];
//     setImages(data);
//   }, []);  


// // useEffect(() => {
// //   axios.get('http://localhost:8080/getimages',
// //   {
// //     headers: {
// //       "Content-Type": "application/json",
// //       "Access-Control-Allow-Credentials": "*"
// //     }
// //   })
// //       .then(response => {
// //           const { data } = response;
// //           setImages(data);
// //       }).catch(err => console.error(err));
// // }, []);  
//   //console.log(images);

//   // axios.get('http://localhost:8080/getimages')
//   // .then(response => {
//   //  const images = response;
//   //  console.log(images);
//   // })
//   // .catch(error => {
//   //  console.log(error);
//   // })
  
//    const classes = useStyles();
//   return (
//       <div classes="root">
//          {images && images.length > 0 && true &&
//           <>
//             <Grid container spacing={3} >
//               {images.map(data => (
//                 <div>
//                   <div>
//                     Hello Text
//                   </div>
//                   <div>
//                     <Grid item xs={6} sm={3}>
//                       <div>
//                       <Paper className={classes.paper}>Description xs=12 sm=6</Paper>
//                       </div>
//                     </Grid>
//                     <Grid item xs={6} sm={3}>
//                       <Paper className={classes.paper}>Media xs=12 sm=6</Paper>
//                     </Grid>
//                   </div>
//                 </div>
//               ))}
//             </Grid>
//           </>
//         }
//         </div>
//   );
// };

// //HelloText
// // {data.image ? <p>{data.image.title}</p> : <br/> }
// // {data.video ? <p>{data.video.title}</p> : <br/> }

// //DescriptionText
// //{data.image ? <p>{data.image.description}</p> : <p/>}                
// //{data.video ? <p>{data.video.description}</p> : <p/>}

// //media
// //{data.image ? <img src={data.image.url} alt="image" width="200" height="200" key={data.image.id}></img> : <p/> }
// //{data.video ? <video src={data.video.url} controls autoplay> </video> : <p/> }

// export default DisplayImages;


// return (
//   <>
//       <h1>Images</h1>
//       <h2>Click todo item to toggle completed</h2>
//       <hr />
//       {images && images.length > 0 && true &&
//       <>
//         {images.map(data => (
//           <div className = "resource">
//               {data.image ? <p>{data.image.title}</p> : <br/> }
//               {data.image ? <p>{data.image.description}</p> : <br/>}                
//               {data.image ? <img src={data.image.url} alt="image" width="500" height="500" key={data.image.id}></img> : <br/> }
//               {data.video ? <p>{data.video.title}</p> : <br/> }
//               {data.video ? <p>{data.video.description}</p> : <br/>}
//               {data.video ? <video src={data.video.url} controls autoplay> </video> : <br/> }
//           </div>
//         ))}
//       </>
//     }
//     </>
// );
// };

// export default DisplayImages;
