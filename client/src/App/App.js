/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
*/
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Frame from './pages/Frame';
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Frame}/>
          <Route path='/dashboard' component={Frame}/>
          <Route path='/network' component={Frame}/>
          <Route path='/screenwriter' component={Frame}/>
          <Route path='/research' component={Frame}/>
          <Route path='/indexcards' component={Frame}/>
          <Route path='/statistics' component={Frame}/>
          <Route path='/digitalpitch' component={Frame}/>
          <Route path='/pitchbible1' component={Frame}/>
          <Route path='/pitchbible2' component={Frame}/>
          <Route path='/settings' component={Frame}/>
          <Route path='/empty' component={Frame}/>
          <Route path='/list' component={Frame}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;