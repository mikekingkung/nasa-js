import { Route } from 'react-router-dom';
import './header.css';
import HeaderBannerImg from './HeaderBannerImg';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header>
            <div className="container">
                <NavBar/>
                <Route component={HeaderBannerImg}/>
            </div>
        </header>
    );
};

export default Header;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import headerimage from '../images/headerimage.png';




// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// const Header = () => {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//         <img src={headerimage} alt="header"/>
//         </AppBar>
//     </div>
//   );
// }
 
// export default Header;
