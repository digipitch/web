import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PitchBibleWizard2 extends Component {
  render() {
    return (
    <div className="PitchBibleWizard2">
      <div class="row dp-frame-titlebar">
        <div class="col-sm-12">Pitch Bible Wizard</div>
      </div>

      <div class="row pitchbiblewizard-mock-img">
        <div class="col-sm-12">
        <h2>Step 2 - Enter Details</h2>
         <Link to={'/pitchbible3'}>
         <img src="/images/mock-pitchbiblewizard2.png" alt="mock step 2" />
         </Link>
        </div>
      </div>
      <div class="row pitchbiblewizard-frame-footerbar">
        <div class="col-sm-12">Screen 2 of 8</div>
      </div>
    </div>
    );
  }
}
export default PitchBibleWizard2;
