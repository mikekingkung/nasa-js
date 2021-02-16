import axios from "axios";
import React, { useState, useEffect } from 'react';
import SearchUsersBar from './SearchUsersBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';




const UserDetails = () => {

    const usersUrl = `http://localhost:8080/users/getuser/2/`;


    const [userDetailsLoaded, setUserDetailsLoaded] = useState("");

    const [userSearchText, setUserSearchText] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");


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
                setUsername(data.userName);
                setTitle(data.title);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.emailAddress);
                setPhoneNumber(data.phoneNumber);
                setDob(data.dob);
                setGender(data.gender);

                setUserDetailsLoaded(true);
            }).catch(err => console.error(err));
      }, [userSearchText]); 
      
      const handleUserSearch = event => {
        //event.preventDefault();

        console.log("key pressed:" , event.key)
        console.log(event.target.value);
        if (event.key === 'Enter'){
            console.log("setting search user text");
            setUserSearchText(event.target.value);
            setUserDetailsLoaded(false);
        }
    }

    return (
        <div>
          <SearchUsersBar
              searchUserText={userSearchText}
              handleUserSearch={handleUserSearch}
              
          />
          <br/>
            <Grid container xs={12} spacing={6} >
               <Grid item xs={6}  justify="left" alignItems ="left">
               <Typography/>
               <p>UserName:{username}</p>
               <p>Title:{title}</p>
               <p>FirstName:{firstName}</p>               
               <p>LastName:{lastName}</p>
               <p>Email:{email}</p>
               <p>PhoneNumber:{phoneNumber}</p>
               <p>DOB:{dob}</p>
               <p>Gender:{gender}</p>
               <Typography/>
               </Grid>
            </Grid>
        </div>
    )
}

export default UserDetails;

