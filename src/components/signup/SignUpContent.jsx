import './users.css';
import { content } from '../../data/content.json';
import { useContext, useState } from 'react';
import axios from 'axios';
import { PATH, USERS_CONTEXT } from '../../constants/constants.json';
//import { setUserDetails } from '../../auth/userAuth.js';
import { useHistory } from 'react-router-dom';
//import UserContext from '../../../UserContext';

const SignUpContent = () => {

    //const {toggleSignedIn} = useContext(UserContext);

    const { push } = useHistory();

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

    const match = !password || !confirmPassword || (password && password === confirmPassword);

    const submitHandler = async e => {
        e.preventDefault();
        if (!match) return;
        // axios.post(`${PATH}${USERS_CONTEXT}/register`, {
        //     username,
        //     password,
        //     title,
        //     firstName,
        //     lastName,
        //     email,
        //     phoneNumber,
        //     dob,
        //     gender
        // }).then(({ data }) => {
        //     setUserDetails(data.token);
        //     authHandler(true);
        //     push("/");
        // })
        //     .catch(err => console.error(err));
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

    return (
        <div className="row m-5" id="signUpContent">
            <div className="col" id="signUpText">
                <p>
                    {content.signup}
                </p>
            </div>
            <div className="col">
                <form id="signUpForm" onSubmit={submitHandler}>
                    <div className="form-group form-row">
                        <label htmlFor="username" className="col-md-2 col-form-label">Username</label>
                        <div className="col-md-10">
                            <input className="form-control" placeholder="Username" id="userName" defaultValue={userName} />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label htmlFor="password" className="col-md-2 col-form-label">Password</label>
                        <div className="col-md-10">
                            <input className="form-control" placeholder="Password" type="password" id="password" defaultValue={password} onInput={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label htmlFor="confirmPassword" className="col-md-2 col-form-label">Confirm</label>
                        <div className="col-md-10">
                            <input className="form-control" placeholder="Confirm Password" type="password" id="confirmPassword" defaultValue={confirmPassword} onInput={e => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>
                    {!match &&
                        <div class="alert alert-danger col-md-10 offset-md-2" role="alert">
                            Passwords do not match!
                        </div>
                    }
                    <div className="form-group form-row">
                        <label className="col-md-2 col-form-label" htmlFor="titleSelect">Title</label>
                        <div className="col-md-10">
                            <select className="form-control" id="titleSelect" defaultValue={title} onInput={e => setTitle(e.target.value)}>
                                <option value="" disabled >Select an option</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                <option value="Ms">Ms</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label htmlFor="name" className="col-md-2 col-form-label" >Name</label>
                        <div className="col-lg-5 col-md-5">
                            <input className="form-control" placeholder="First Name" defaultValue={firstName} onInput={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="col-lg-5 col-md-5 stacked-control">
                            <input className="form-control" placeholder="Surname" defaultValue={lastName} onInput={e => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label htmlFor="emailAddress" className="col-md-2 col-form-label">Email</label>
                        <div className="col-md-10">
                            <input className="form-control" type="email" placeholder="yourname@yourdomain.com" id="emailAddress" defaultValue={emailAddress} onInput={e => setEmailAddress(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label htmlFor="phoneNo" className="col-md-2 col-form-label">Phone</label>
                        <div className="col-md-10">
                            <input type="tel" className="form-control" placeholder="01234567890" id="phoneNo" defaultValue={phoneNumber} onInput={e => setPhoneNumber(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label htmlFor="dob" className="col-md-2 col-form-label">DoB</label>
                        <div className="col-md-10">
                            <input className="form-control" type="date" placeholder="DD/MM/YYYY" id="dob" defaultValue={dob} onInput={e => setDob(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label htmlFor="gender" className="col-lg-2 col-form-label">Gender</label>
                        <div className="form-row col-lg-6">
                            <div className="form-check form-check-inline custom-control custom-radio custom-control-inline">
                                <input type="radio" name="gender" defaultValue="female" id="femaleRadio" checked={gender === "female"} onChange={e => setGender(e.target.value)} className="custom-control-input" />
                                <span className="checkmark"></span>
                                <label htmlFor="femaleRadio" className="custom-control-label ccc">Female</label>
                            </div>
                            <div className="form-check form-check-inline custom-control custom-radio custom-control-inline">
                                <input type="radio" name="gender" defaultValue="male" id="maleRadio" checked={gender === "male"} onChange={e => setGender(e.target.value)} className="custom-control-input" />
                                <label htmlFor="maleRadio" className="custom-control-label ccc">Male</label>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ textAlign: `right` }}>
                            <input type="submit" defaultValue="Sign Up" id="btn-sign-up" disabled={!match} />
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default SignUpContent;