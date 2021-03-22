import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import MyContext from './MyContext';

function App() {
  return (
    <>
      <MyContext.Provider value='Guest'>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
      </MyContext.Provider>
    </>
  );
}

export default App;
