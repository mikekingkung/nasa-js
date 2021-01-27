import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;

// import React from "react";
// import Header  from "./components/header/Header";
// import Footer  from "./components/footer/Footer";
// import Banner from "./components/Banner";
// import DisplayImages from "./components/DisplayImages";

// import "./App.css";

// function App() {
//   return (
//     <div >
//       <Header />
//       <Banner />
//       <DisplayImages />
//       <Footer />
//     </div>
//   );
// }



// export default App;



