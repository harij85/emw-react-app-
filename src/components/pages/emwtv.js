import React, { Component } from 'react';
//import {
//  Link
//} from 'react-router-dom';
import EMWTV from './video.js';
import Preview from './preview-video.js';
class EmwTV extends Component {
  render() {
    return (



<div id="section1">
<div className="video-container">

<div className="one"><h1>#EMWTV </h1> </div>

<div className="video"><EMWTV/> </div>

</div>
<div id="section3">

<button className=" btn btn-success"> #LiveMusic</button>
<button className=" btn btn-success">#CDF</button>
<button className=" btn btn-success"> #GwdiHw</button>
<button className=" btn btn-success"> #5thSpear</button>

</div>


<div id="section4">
<div className="four"><Preview/> </div>
<div className="five"><Preview/>   </div>
<div className="six"><Preview/>  </div>
</div>
</div>








    );
  }
}

export default EmwTV;
