import React, { useState, useEffect } from 'react';
import DisplayImages from './DisplayImages';
import SearchBar from './search/SearchBar';
import axios from "axios";
import LoadingContent from  './loading/LoadingContent';

const FilterableImages = ({query}) => {

    const imagesUrl = `http://localhost:8080/getimages`;

    const [searchText, setSearchText] = useState(query);
    const [advanced, setAdvanced] = useState(false);

    const [images, setImages] = useState(query);
    const [isLoaded, setIsLoaded] = useState(false);

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
          setImages(data);
          setIsLoaded(true);
      }).catch(err => console.error(err));
}, [searchText]); 

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
        }

        if (event.target.type === `checkbox`) {
            setAdvanced(event.target.checked);
        }
    }

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


