

import React, { Component } from 'react';
import video from '../media/video/1loop.mp4';






//import './src/assets/css/bootstrap.min.css';
//import './src/assets/css/style.css';

class Preview extends Component {
  render() {
    return (


<video id="preview" className="video-js vjs-big-play-centered"
controls
preload="none"
data-setup="{}">

<source src={video} type='video/mp4'></source>

<p className="vjs-no-js">
To view this video please enable JavaScript, and consider upgrading to a web browser that
<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
</p>
</video>






);
}
}


export default Preview;
