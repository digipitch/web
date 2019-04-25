import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import logo from '../../App/logo.svg';

class Settings extends Component {
  render() {
    const settings = 'this is a test';
    return (
    <div className="Settings">
      <div className="row dp-frame-titlebar">
        <div className="col-sm-12">Your Digipitch Settings</div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      {settings}
      <div className="UserSettings">
        <div id="usersettings"></div>
      </div>      
      {/* Link to List.js */}
            <Link to={'./list'}>
        <button variant="raised">
            Test: Get List via Backend API
        </button>
      </Link>

    </div>
    );
  }

}

// Component.render(<UserSettings/>, document.getElementById("usersettings"));

export default Settings;
