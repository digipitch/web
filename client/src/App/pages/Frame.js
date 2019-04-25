import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Frame extends Component {
  render() {
    return (
    <div className="App">
      <div className="container-fluid">
      <div className="row dp-frame-menu">
          <div className="col-xs-2 col-sm-2"><img className="dp-logo" src="/images/White-Logo.png" alt="" /></div>
          <div className="col-xs-7 col-sm-7"></div>
          <div className="col-xs-3 col-sm-3 dp-frame-user">Paul David Dayton</div>
      </div>
      <div className="row">
        <div className="col-xs-1 col-sm-1 dp-frame-components">
          <div className="dp-frame-components-titlebar">&nbsp;</div>
          <div id="Home" className="dp-frame-components-component"><img src="/images/home.png" alt="" />Home</div>
          <div id="Network" className="dp-frame-components-component"><img src="/images/network.png" alt="" />Network</div>
          <div id="Screenwriter" className="dp-frame-components-component"><img src="/images/screenwriter.png" alt="" />Screenwriter</div>
          <div id="Research" className="dp-frame-components-component"><img src="/images/research.png" alt="" />Research</div>
          <div id="Index Cards" className="dp-frame-components-component"><img src="/images/indexcards.png" alt="" />Index&nbsp;Cards</div>
          <div id="Statistics" className="dp-frame-components-component"><img src="/images/statistics.png" alt="" />Statistics</div>
          <div id="Digital Pitch" className="dp-frame-components-component"><img src="/images/digitalpitch.png" alt="" />Digital&nbsp;Pitch</div>
          <div id="Pitch Bible" className="dp-frame-components-component"><img src="/images/pitchbible.png" alt="" />Pitch&nbsp;Bible</div>
          <div id="Settings" className="dp-frame-components-component"><img src="/images/settings.png" alt="" />Settings</div>
        </div>
        <div className="col-xs-11 col-sm-11">
          <div className="SubApp">
            <div id="subroot"></div>
          </div>
        </div>
      </div>
      <div className="row dp-frame-footerbar">
          <div className="col-xs-10 col-sm-10"></div>
          <div className="col-xs-2 col-sm-2">&nbsp;</div>
        </div>      
    </div>
  </div>
    );
  }
}
export default Frame;
