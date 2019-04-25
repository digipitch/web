import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Empty extends Component {
  render() {
    return (
    <div className="Empty">
      <div class="row dp-frame-titlebar">
        <div class="col-sm-12">Not Implemented</div>
      </div>
      <div class="row pitchbiblewizard-mock-img">
        <div class="col-sm-12">
         <Link to={'/pitchbible3'}>
         <img src="/images/White-Logo.png" alt="mock step 2" />
         </Link>
         <h2>This component has not been implemented.</h2>
        </div>
      </div>
      <div class="row pitchbiblewizard-frame-footerbar">
        <div class="col-sm-12"></div>
      </div>

    </div>
    );
  }
}
export default Empty;
