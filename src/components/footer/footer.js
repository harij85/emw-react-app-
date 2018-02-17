import React, { Component } from 'react';






//import './src/assets/css/bootstrap.min.css';
//import './src/assets/css/style.css';

class Footer extends Component {
  render() {
    return (
      <footer>
      <footer className="footer">
            <div className="container">
            <div className="footer-social">
                <a href="https://facebook.com/electronicmusicwales" className="social-icons"><i className="fa fa-facebook"></i></a>
                <a href="https://soundcloud.com/electronic-music-wales" className="social-icons"><i className="fa fa-soundcloud"></i></a>
                <a href="https://twitter.com/emwblog" className="social-icons"><i className="fa fa-twitter"></i></a>
            </div>
              <span className="text-muted "><p><small>© 2018 Electronic Music Wales</small></p></span>
            </div>

          </footer>
      </footer>



    );
  }
}


export default Footer;
