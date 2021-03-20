// import React from "react";
// import ReactDOM from "react-dom";


import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";


const theme = createMuiTheme({
    palette: {
       primary: {
          main: "#ffaa00" 
                 },
       secondary: {
          main: "#00ffff" 
                  }
             }
});            

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>,document.getElementById("root"));

