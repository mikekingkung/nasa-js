import axios from "axios";
import React, { useState, useEffect } from 'react';
import SearchUsersBar from './SearchUsersBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserLinks from './UserLinks';

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
                setUserName("Guest");
                setTitle(response.data.title);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmailAddress(response.data.emailAddress);
                setPhoneNumber(response.data.phoneNumber);
                setDob(response.data.dob);
                setGender(response.data.gender);
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
                setUserLinks(data);
                setUserLinksIsLoaded(true);
            }).catch(err => console.error("error getting userlinks", err));
      }, [userSearchText]); 

      return (
          <div>
          {userDetailsLoaded ?
            <Grid container spacing={6} >
               <Grid item xs={6} >
                <Typography/>
                <div data-testid = "userName">
                  <p>  UserName:{userName}</p>
                </div>
                <div data-testid = "title" >
                  <p> Title:{title}</p>
                </div>
                <div data-testid = "firstName">
                  <p>  FirstName:{firstName}</p>               
                </div>
                <div data-testid = "lastName">
                  <p>  LastName:{lastName}</p>
                </div>
                <div data-testid = "emailAddress">
                  <p>  Email:{emailAddress}</p>
                </div>
                <div data-testid =  "phoneNumber">
                  <p>  PhoneNumber:{phoneNumber}</p>
                </div>
                <div data-testid = "dob">
                  <p>  DOB:{dob}</p>
                </div>                
                <div data-testid = "gender"> 
                  <p> Gender:{gender}</p>
                </div>
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

