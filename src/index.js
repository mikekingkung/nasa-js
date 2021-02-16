// import React from "react";
// import ReactDOM from "react-dom";


import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery';
import 'popper.js';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";


const theme = createMuiTheme({
    palette: {
       primary: {
          main: "#ff8f00" // This is an orange looking color
                 },
       secondary: {
          main: "#ffcc80" //Another orange-ish color
                  }
             }
});            


//React Render
//ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>,document.getElementById("root"));

