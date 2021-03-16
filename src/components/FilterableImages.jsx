import React, { useState, useEffect } from 'react';
import DisplayImages from './DisplayImages';
import SearchBar from './search/SearchBar';
import axios from "axios";
import LoadingContent from  './loading/LoadingContent';

import { PATH, USERS_CONTEXT } from '../constants/constants.json';


const FilterableImages = ({query}) => {

    const imagesUrl = `http://localhost:8080/getimages`;

    const [searchText, setSearchText] = useState(query);
    const [advanced, setAdvanced] = useState(false);

    const [images, setImages] = useState(query);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userLinks, setUserLinks] = useState({
      UserName: "Guest",
      url: "",
      title: ""
  },);
    const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    axios.get(`${imagesUrl}/${searchText}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*"
      },
    })
        .then(response => {
            const { data } = response;
            setImages(data);
            setIsLoaded(true);
        }).catch(err => console.error(err));
  }, [searchText]); 


  useEffect(() => {
    if (userLinks && userLinks.title) {
      // We only want to post if we have valid link details
      axios.post(`${PATH}${USERS_CONTEXT}/saveuserlinks`, userLinks,
      {
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "*"
        },
        timeout : 1000}).then(response => {
              setIsSaved(true);
          }).catch(err => console.error(err));
      }
  }, [userLinks]); 
    
  const handleChange = event => {
    //event.preventDefault();
    if (event.key === 'Enter'){
      setSearchText(event.target.value);
      setIsLoaded(false);
      setUserLinks({UserName: "Guest",
                    url: "",
                    title: ""
      });
    }
  }

  const userName = 'Guest';

  const handleButtonPress = (event, data, markedIndex) => {
    const links = {'userName': userName,
                   'url':  data[markedIndex].image ? data[markedIndex].image.url : data[markedIndex].video.url,
                   'title':  data[markedIndex].image ? data[markedIndex].image.title : data[markedIndex].video.title
                  }
    setUserLinks(links);
    data[markedIndex].button=true
  };
    
  return (
    <div data-testid="searchBar" >
        <SearchBar
            searchText={searchText}
            advanced={advanced}
            handleChange={handleChange}
        />
        {isLoaded?
              <DisplayImages data-testid="displayImages"
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


