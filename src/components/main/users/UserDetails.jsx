import axios from "axios";
import React, { useState, useEffect } from 'react';
import SearchUsersBar from './SearchUsersBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserLinks from './UserLinks';
import { ContactSupport } from "@material-ui/icons";

const UserDetails = () => {

  const usersUrl = `http://localhost:8080/users/getbyusername`;
    const userLinksUrl = `http://localhost:8080/users/getlinksbyusername`;

    const [userDetailsLoaded, setUserDetailsLoaded] = useState(false);
    const [userLinksIsLoaded, setUserLinksIsLoaded] = useState(false);

    const [userSearchText, setUserSearchText] = useState("Guest");
    const [userLinks, setUserLinks] = useState([]);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");


    const userLinksSearch = "Guest";

    useEffect(() => {
     axios.get(`${usersUrl}/${userSearchText}`,
 
     {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": "*"
          }
        })
            .then(response => {
                const { data } = response;
                setUserName("Guest");
                setTitle(data.title);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmailAddress(data.emailAddress);
                setPhoneNumber(data.phoneNumber);
                setDob(data.dob);
                setGender(data.gender);
                setUserDetailsLoaded(true);
            }).catch(err => console.error("error getting user details", err));
      axios.get(`${userLinksUrl}/${userLinksSearch}`,
      {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": "*"
          }
        })
            .then(response => {
                const { data } = response;
                console.log("response from getUserLinks>>>>>>", response);
                console.log("data>>>>>>", data);               
                setUserLinks(data);
                console.log('userlinks>>>>>', userLinks);
                setUserLinksIsLoaded(true);
            }).catch(err => console.error("error getting userlinks", err));
      }, [userSearchText]); 

      
    //   const handleUserSearch = event => {
    //     event.preventDefault();

    //     console.log("key pressed:" , event.key)
    //     console.log(event.target.value);
    //     if (event.key === 'Enter'){
    //         console.log("setting search user text");
    //         setUserSearchText(event.target.value);
    //         setUserDetailsLoaded(false);
    //         setUserLinksIsLoaded(false);
    //     }
    // }

    console.log("userlinks before render", userLinks);

    // <div>
    // <SearchUsersBar
    //   searchUserText={userSearchText}
    //   handleUserSearch={handleUserSearch}
    // />


    return (
          <div>
          {userDetailsLoaded ?
            <Grid container spacing={6} >
               <Grid item xs={6} >
                <Typography/>
                <p>UserName:{userName}</p>
                <p>Title:{title}</p>
                <p>FirstName:{firstName}</p>               
                <p>LastName:{lastName}</p>
                <p>Email:{emailAddress}</p>
                <p>PhoneNumber:{phoneNumber}</p>
                <p>DOB:{dob}</p>
                <p>Gender:{gender}</p>
                <Typography/>
               </Grid>
            </Grid>
            :
            <p>Loading user details</p>
          }
          {userLinksIsLoaded ?
            <UserLinks links= {userLinks} />: <p>Loading user links</p>}
        </div>

    )
}

export default UserDetails;

