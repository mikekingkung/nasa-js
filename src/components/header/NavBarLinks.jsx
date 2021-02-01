import { NavLink } from 'react-router-dom';
//import {isAuthenticated} from '../auth/userAuth';
import UserContext from '../../UserContext';
import { useContext } from 'react';

const NavBarLinks = () => {
    const { signedIn } = useContext(UserContext);

    return (
        <ul className="navbar-nav chevron">
            <li className="nav-item"><NavLink to="/topics" activeClassName="active" className="nav-link">Topics</NavLink></li>
            <li className="nav-item"><NavLink to="/links" activeClassName="active" className="nav-link">Links</NavLink></li>
            <li className="nav-item"><NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink></li>
            <li className="nav-item"><a href="#" className="nav-link">Login</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Register</a></li>
        </ul>
    );
};

// {
//     signedIn && isAuthenticated() ?
//         <NavLink to="/profile" activeClassName="active" className="nav-link">My<br />Account</NavLink>
//         :
//         <NavLink to="/login" activeClassName="active" className="nav-link">Sign<br/>In</NavLink>
//     }

export default NavBarLinks;
