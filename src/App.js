import React, {
  Component
}
from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom';



//components

import Header from './components/header/header';
import Footer from './components/footer/footer';
//import MainContent from './components/main-content/main-content';
import Home from './components/pages/home';
import Blog from './components/pages/blog';
import Featured from './components/pages/featured';
import Tetrahex from './components/pages/tetrahex'
import EmwTV from './components/pages/emwtv';






//includes

import './assets/css/style.css';
import './assets/css/emwtv.css';



class App extends Component {
  render() {
    return (
      <Router>
      < div className = "container" >
      <Header/>

      <Route exact path='/' component={Home}/>
      <Route exact path='/Featured-Interview' component={Featured}/>
      <Route exact path='/Tetrahex' component={Tetrahex}/>
      <Route exact path='/Blog' component={Blog}/>
      <Route exact path='/EMWTV' component={EmwTV}/>




<Footer/>
      </div>
      </Router>


    );
  }

}

  export default App;
