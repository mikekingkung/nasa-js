import React, { useState, useEffect } from 'react';
import DisplayImages from './DisplayImages';
import SearchBar from './search/SearchBar';
import axios from "axios";
import LoadingContent from  './loading/LoadingContent';
import { data } from 'jquery';
import { PATH, USERS_CONTEXT } from '../constants/constants.json';
import { CompareArrowsOutlined } from '@material-ui/icons';

const FilterableImages = ({query}) => {

    const imagesUrl = `http://localhost:8080/getimages`;

    const [searchText, setSearchText] = useState(query);
    const [advanced, setAdvanced] = useState(false);

    const [images, setImages] = useState(query);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userLinks, setUserLinks] = useState({});
    const [isSaved, setIsSaved] = useState(false);

//    const getImages = async query => {
//     const {data} = await axios.get(`${imagesUrl}${query}`,
//        {
//          headers: {
//            "Content-Type": "application/json",
//            "Access-Control-Allow-Credentials": "*"
//          }
//        })
//        setImages(data);
//        setIsLoaded(true);
//    }

//    useEffect(() => {
//     console.log("firing effect");
//     const query = `/${searchText}`;
//     setTimeout(() => {
//         getImages(query);
//     }, 3000);
// }, [searchText])


useEffect(() => {
  axios.get(`${imagesUrl}/${searchText}`,
  {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "*"
    }
  })
      .then(response => {
          const { data } = response;

        //   data.map(item => {
        //     item.button = false;
        //   });
          
          setImages(data);
          setIsLoaded(true);
      }).catch(err => console.error(err));
}, [searchText]); 


useEffect(() => {
    console.log("saving user links", userLinks);
    const name = userLinks.userName;
    const title = userLinks.title;
    const url = userLinks.url;
    axios.post(`${PATH}${USERS_CONTEXT}/saveuserlinks`, {
        userName,
        url,
        title
    },
    {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*"
      }}).then(response => {
            console.log("saved userlinks", response)
  
          //   data.map(item => {
          //     item.button = false;
          //   });
            
            //setUserLinks(userLinks);
            setIsSaved(true);
        }).catch(err => console.error(err));
  }, [userLinks]); 


    // const data = [
    //     {
    //      "image": {
    //               "id": "0",
    //               "url": "http://images-assets.nasa.gov/image/PIA19705/PIA19705~large.jpg",
    //               "title": "New Details on Pluto",
    //               "description": "This image of Pluto was taken by New Horizons Long Range Reconnaissance Imager (LORRI) at 4:18 UT on July 9 2015 from a range of 3.9 million miles (6.3 million kilometers). It reveals new details on the surface of Pluto including complex patterns in the transition between the very dark equatorial band (nicknamed The Whale which occupies the lower part of the image and the brighter northern terrain."
    //               }
    //     }
    //   ];
    
    const handleChange = event => {
        //event.preventDefault();

        console.log("key pressed:" , event.key)
        console.log(event.target.value);
        if (event.key === 'Enter'){
            console.log("setting search text");
            setSearchText(event.target.value);
            setIsLoaded(false);
            setUserLinks({});
        }
    }

    const userName = 'Guest';

    // try updating user links and passing in here
    const handleButtonPress = (event, data, markedIndex) => {

        console.log("marked button selected");
        //console.log("data", data[markedIndex]);
        //console.log("userName", userName);
        //console.log("url", data[markedIndex].image ? data[markedIndex].image.url : data[markedIndex].video.url);
        //console.log("title", data[markedIndex].image ? data[markedIndex].image.title : data[markedIndex].video.title);
        

    const links = {'userName': {userName},
                        'url':  data[markedIndex].image ? data[markedIndex].image.url : data[markedIndex].video.url,
                        'title':  data[markedIndex].image ? data[markedIndex].image.title : data[markedIndex].video.title
                   }

        console.log("setting user links");
        setUserLinks(links);
        data[markedIndex].button=true
        console.log("set userLinks", userLinks);
    };
    
    return (
        <div id="table-wrapper">
            <SearchBar
                searchText={searchText}
                advanced={advanced}
                handleChange={handleChange}
            />
            {isLoaded?
                 <DisplayImages
                    images={images}
                    searchText={searchText}
                    advanced={advanced}
                    isLoaded={isLoaded}
                    handleButtonPress={handleButtonPress}
                />
                :
                <div>
                  <LoadingContent/>
                </div>
            }
        </div>
    );
};

export default FilterableImages;


