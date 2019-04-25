import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../App/logo.svg';

class Statistics extends Component {
  render() {
    return (
    <div className="Statistics">
      <div className="row dp-frame-titlebar">
        <div className="col-sm-12">System Statistics</div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    );
  }
}
export default Statistics;
