import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../../App/logo.svg';

class UserSettings extends Component {
  /*
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      settings: {}
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getSettings();
  }

  // Retrieves the list of items from the Express app
  getSettings = () => {
    fetch('/api/getSettings')
    .then(res => res.json())
    .then(settings => this.setState( settings ))
  }
  */
  render() {
    // const settings = this.state;
     //const settings = 'first this test me';
    /*
     return (
      <div className="UserSettings">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>User Settings via API</h1>
        {/* Check to see if any items are found*/ /*}
        {
          <div>
            {/* Render the list of items */ /*}
            {settings}
          </div>
       }
      </div>
    ); */
    return ('these are the usersettings.');
  }
}
export default UserSettings;
