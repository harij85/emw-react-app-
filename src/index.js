import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
//import videojs from 'video.js';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBe9xsHmksuWcWO4z0_w2spif5RbFYQIv0",
    authDomain: "electronic-music-wales.firebaseapp.com",
    databaseURL: "https://electronic-music-wales.firebaseio.com",
    projectId: "electronic-music-wales",
    storageBucket: "electronic-music-wales.appspot.com",
    messagingSenderId: "912158927101"
  };
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
