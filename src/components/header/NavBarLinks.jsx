import { NavLink } from 'react-router-dom';
//import {isAuthenticated} from '../auth/userAuth';
import UserContext from '../../UserContext';
import { useContext } from 'react';

const NavBarLinks = () => {
    //Kept userContext althoughj not used as it will be used in later stages
    const { signedIn } = useContext(UserContext);

    return (
        <ul className="navbar-nav">
            <li className="nav-item"><NavLink to="/discover" activeClassName="active" className="nav-link">Discover</NavLink></li>            
            <li className="nav-item"><NavLink to="/topics" activeClassName="active" className="nav-link">Topics</NavLink></li>
            <li className="nav-item"><NavLink to="/links" activeClassName="active" className="nav-link">Links</NavLink></li>
            <li className="nav-item"><NavLink to="/secured" activeClassName="active" className="nav-link">Secured</NavLink></li>
            <li className="nav-item"><NavLink to="/userdetails" activeClassName="active" className="nav-link">User Details</NavLink></li>
            <li className="nav-item"><NavLink to="/signup" activeClassName="active" className="nav-link">Sign Up</NavLink></li>            
            <li className="nav-item"><NavLink to="/image/1" className="nav-link">Image 1</NavLink></li>
            <li className="nav-item"><NavLink to="/image/2" className="nav-link">Image 2</NavLink></li>
            <li className="nav-item"><NavLink to="/image/3" className="nav-link">Image 3</NavLink></li>        
            <li className="nav-item"><NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink></li>
           </ul>
    );
};

export default NavBarLinks;

// Kept as to be used in later stages
// {
//     signedIn && isAuthenticated() ?
//         <NavLink to="/profile" activeClassName="active" className="nav-link">My<br />Account</NavLink>
//         :
//         <NavLink to="/login" activeClassName="active" className="nav-link">Sign<br/>In</NavLink>
//     }

// <li className="nav-item"><a href="#" className="nav-link">Login</a></li>
// <li className="nav-item"><a href="#" className="nav-link">Register</a></li>


