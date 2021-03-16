import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './users.css';
import { content } from '../../data/content.json';
import { useContext, useState } from 'react';
import axios from 'axios';
import { PATH, USERS_CONTEXT } from '../../constants/constants.json';
//import { setUserDetails } from '../../auth/userAuth.js';
import { useHistory } from 'react-router-dom';
//import UserContext from '../../../UserContext';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup'
import Select from '@material-ui/core/Select'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles';

export default function Form() {

  const useStyles = makeStyles((theme) => ({
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

  const { push } = useHistory();
  const classes = useStyles();

  const [userName, setUserName] = useState("Guest");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  let firstNameInput = "";

  const match = !password || !confirmPassword || (password && password === confirmPassword);

  const submitHandler = async e => {
    e.preventDefault();
    if (!match) return;
    console.log("userName",userName);
    console.log("password",password);
    console.log("title",title);
    console.log("firstName",firstName);
    console.log("lastName",lastName);
    console.log("emailAddress",emailAddress);
    console.log("phoneNumber",phoneNumber);
    console.log("dob",dob);
    console.log("gender",gender);
   
    try {
      const response = await axios.post(`${PATH}${USERS_CONTEXT}/register`, {
          userName,
          password,
          title,
          firstName,
          lastName,
          emailAddress,
          phoneNumber,
          dob,
          gender
      });
        //setUserDetails(response.data.token);
        //toggleSignedIn(true);
        push(`/`)
    }
    catch (err) {
        console.error(err);
    }
  }

  const titles = [{
    value: 'Mr',
    label: 'Mr',
  },
  {
    value: 'Mrs',
    label: 'Mrs',
  },
  {
    value: 'Miss',
    label: 'Miss',
  },
  {
    value: 'Ms',
    label: 'Ms',
  }];

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        SignUp
      </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} direction="vertical" alignItems="stretch" >
        <div id="signUpText">
                <p>
                    {content.signup}
                </p>
        </div>          
      </Grid>
      <Grid item xs={12} sm={6} direction="horizontal" > 
        <div>
          <form onSubmit={submitHandler}>
            <Grid item xs={12} sm={6}  style={{maxWidth:"100%"}}>          
              <div style={{ border: "1px solid blue", backgroundColor: "white", color: "black"}} >
                <TextField 
                  id="username"
                  name="username"
                  label="Username"
                  type="input"
                  value={userName}
                  variant="outlined"
                  style={{ margin: 8}}
                />
                <Grid container>
                  <Grid item xs={6} sm={3} alignItems="left" > 
                    <TextField 
                      style={{ margin: 8}}
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      value={password}
                      onInput={e => 
                        {console.log('set password')
                        setPassword(e.target.value)}}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3} alignItems="right" > 
                    <TextField 
                      id="confirm-password"
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      variant="outlined"
                      style={{ margin: 8, flex: "NoWrap"}}
                      onInput={e => setConfirmPassword(e.target.value)}
                    />
                    {!match &&
                      <div>
                        Passwords do not match!
                      </div>
                    } 
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6} alignItems="right" >   
                <TextField
                  style={{ margin: 8}}
                  variant="outlined"
                  id="standard-select-title"
                  select
                  value={title}
                  onChange={e =>setTitle(e.target.value)}
                  helperText="Please select your title"
                >
                  {titles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                </Grid> 
                  
                <TextField 
                  variant="outlined"
                  id="firstname"
                  name="firstNameInput"
                  label="First Name"
                  type="input"
                  style={{ margin: 8}}
                  onChange={e =>setFirstName(e.target.value)}
                /> 
            
                <TextField 
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  variant="outlined"
                  type="input"
                  value={lastName}
                  style={{ margin: 8}}
                  onInput={e => setLastName(e.target.value)}
                />   
                        
                <TextField 
                  id="emailaddress"
                  name="emailaddress"
                  label="Email Address"
                  variant="outlined"
                  type="input"
                  value={emailAddress}
                  style={{ margin: 8}}
                  onInput={e => setEmailAddress(e.target.value)}
                />   
                    
                <TextField 
                  id="phonenumber"
                  name="phonenumber"
                  label="Phone Number"
                  variant="outlined"
                  type="input"
                  value={phoneNumber}
                  style={{ margin: 8}}
                  onInput={e => setPhoneNumber(e.target.value)}
                />  
                <TextField
                    style={{ margin: 8}}
                    id="date"
                    label="Date of Birth"
                    type="date"
                    name="DateOfBirth"
                    defaultValue="DOB"
                    className="form-field"
                    onInput={e => 
                        {console.log('set dob')
                        setDob(e.target.value)}}
                    InputLabelProps={{
                        shrink: true,
                  }}
                />
                <RadioGroup style={{ margin: 8}} label="Gender" name="gender" value={gender} onClick={e => setGender(e.target.value)} row="true" >
                    <FormLabel component="legend">Gender</FormLabel>
                    <FormControlLabel value="Male" control={<Radio />} label="Male"  />
                    <FormControlLabel value="Female" control={<Radio />} label="Female"  />
                    <FormControlLabel value="Other" control={<Radio />} label="Other"  />
                </RadioGroup> 
                <Button color="secondary" fullWidth type="submit" variant="contained">
                  Submit 
                </Button>
              </div>
            </Grid>
          </form>
      </div>
    </Grid>         
  </Grid>         
  </div>    
  );
}





