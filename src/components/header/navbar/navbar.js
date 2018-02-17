import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';






//import './src/assets/css/bootstrap.min.css';
//import './src/assets/css/style.css';

class Navbar extends Component {
  render() {
    return (


<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link className="navbar-brand" to="/"><img src="https://lh3.google.com/u/1/d/1sZDm8TqoXvsFf9LPA0oQDl4NQ7m6OAvH=w2136-h1472-iv1" width="80"height="50"
>
</img></Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mr-auto">
  <li className="nav-item active">
    <Link to="/" className="nav-link" >About <span className="sr-only">(current)</span></Link>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Featured Interviews
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <Link to="/Featured-Interview" className="dropdown-item">An interview with Simon Parton</Link>
      <a className="dropdown-item" href="#">An interview with Eädyth a Endaf</a>

    </div>
    </li>
  <li className="nav-item">
    <Link to="/Blog" className="nav-link" >Blog</Link>
  </li>
  <li className="nav-item">
    <Link to="/Subscribe" className="nav-link" >Subscribe</Link>
  </li>
</ul>

</div>
</nav>


);
}
}

export default Navbar;
