//import BurgerBtn from "./BurgerBtn";
import NavBarLinks from "./NavBarLinks";
import logo from '../../images/space.jpg';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Learn Space Ltd" />
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <NavBarLinks/>
                </div>
            </div>
        </nav>
    );
};

//<BurgerBtn />

export default NavBar;
