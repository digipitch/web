import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PitchBibleWizard1 extends Component {
  render() {
    return (
    <div className="PitchBibleWizard1">
      <div class="row dp-frame-titlebar">
        <div class="col-sm-12">Pitch Bible Wizard</div>
      </div>
      <div class="row pitchbiblewizard-mock-img">
        <div class="col-sm-12">
        <h2>Step 1 - Click on a Pitch Type</h2>
         <Link to={'/pitchbible2'}>
         <img src="/images/mock-pitchbiblewizard1.png" alt="mock step 1" />
         </Link>
        </div>
      </div>
      <div class="row pitchbiblewizard-frame-footerbar">
        <div class="col-sm-12">Screen 1 of 8</div>
      </div>
    </div>
    );
  }
}
export default PitchBibleWizard1;
