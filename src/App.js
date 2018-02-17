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






//includes

import './assets/css/style.css';



class App extends Component {
  render() {
    return (
      <Router>
      < div className = "container" >
      <Header/>

      <Route exact path='/' component={Home}/>
      <Route exact path='/Featured-Interview' component={Featured}/>
      <Route exact path='/Blog' component={Blog}/>




<Footer/>
      </div>
      </Router>


    );
  }

}

  export default App;
