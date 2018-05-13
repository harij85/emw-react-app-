import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="jumbotron text-center">
      <div className="container">

        <h1> Welcome to Electronic Music Wales </h1>

        <p className="home text-center"> A platform to celebrate and promote the music scene in Wales as well as send out an invitation to the world for collaboration, support and community.
        Something that is talked about in our featured interviews. </p>
      <Link to="/Featured-Interview" className="btn btn-success">Read More</Link>
      </div>
      </div>






    );
  }
}

export default Home;
