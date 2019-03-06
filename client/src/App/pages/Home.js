import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
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
    </div>
    );
  }
}
export default Home;
