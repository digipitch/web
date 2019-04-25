/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App/App';
import SubApp from './App/SubApp';
import UserSettings from './App/pages/particles/UserSettings';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));

render((
    <BrowserRouter>
        <SubApp/>
    </BrowserRouter>
), document.getElementById('subroot'));

render(<UserSettings/>, document.getElementById('usersettings'));