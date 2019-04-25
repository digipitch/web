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
// import Home from './pages/Home';
import List from './pages/List';
import Dashboard from './pages/Dashboard';
import Network from './pages/Network';
import Screenwriter from './pages/Screenwriter';
import Research from './pages/Research';
import IndexCards from './pages/Indexcards';
import Statistics from './pages/Statistics';
import DigitalPitch from './pages/DigitalPitch';
import PitchBible1 from './pages/PitchBibleWizard1';
import PitchBible2 from './pages/PitchBibleWizard2';
import Settings from './pages/Settings';
import Empty from './pages/Empty';
class SubApp extends Component {
  render() {
    const SubApp = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/network' component={Network}/>
          <Route path='/screenwriter' component={Screenwriter}/>
          <Route path='/research' component={Research}/>
          <Route path='/indexcards' component={IndexCards}/>
          <Route path='/statistics' component={Statistics}/>
          <Route path='/digitalpitch' component={DigitalPitch}/>
          <Route path='/pitchbible1' component={PitchBible1}/>
          <Route path='/pitchbible2' component={PitchBible2}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/empty' component={Empty}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <SubApp/>
      </Switch>
    );
  }
}

export default SubApp;