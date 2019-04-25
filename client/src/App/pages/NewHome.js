import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewHome extends Component {
  render() {
    return (
    <div className="App">
      <h1>Digipitch React Client Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            Test: Get List via Backend API
        </button>
      </Link>
      <div class="container-fluid" style="color:white; background-color:#0E1621;">
        <div class="row dp-frame-menu">
          <div class="col-sm-2">
            <img class="dp-logo" src="/images/White-Logo.png" />
          </div>
          <div class="col-sm-7">
          </div>
          <div class="col-sm-3 dp-frame-user">
            Paul David Dayton
          </div>
  
        </div>
        <div class="row dp-frame-titlebar">
          <div class="col-sm-12">
Pitch Bible Wizard
          </div>
        </div>
        <div class="row">
          <div class="col-sm-1 dp-frame-components">
            <div class="dp-frame-components-component inactive-component"><img src="/images/home.png" />Home</div>
            <div class="dp-frame-components-component inactive-component"><img src="/images/network.png" />Network</div>
            <div class="dp-frame-components-component inactive-component"><img src="/images/screenwriter.png" />Screenwriter</div>
            <div class="dp-frame-components-component inactive-component"><img src="/images/research.png" />Research</div>
            <div class="dp-frame-components-component inactive-component"><img src="/images/indexcards.png" />Index&nbsp;Cards</div>
            <div class="dp-frame-components-component inactive-component"><img src="/images/statistics.png" />Statistics</div>
            <div class="dp-frame-components-component inactive-component"><img src="/images/digitalpitch.png" />Digital&nbsp;Pitch</div>
            <div class="dp-frame-components-component active-component"><img src="/images/pitchbible.png" />Pitch&nbsp;Bible</div>
            <div class="dp-frame-components-component inactive-component"><img src="/images/settings.png" />Settings</div>
          </div>
          <div class="col-sm-11">
            <div id="roots"></div>
          </div>
        </div>
        <div class="row dp-frame-footerbar">
          <div class="col-sm-10"></div>
          <div class="col-sm-2">&nbsp;</div>
        </div>      
      </div>
    </div>
    );
  }
}
export default NewHome;
