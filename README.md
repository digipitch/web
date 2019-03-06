# Digipitch Main Website 
Web Server for Digipitch

# Dev Notes during initial setup
First part of set up based on 
https://blog.cloudboost.io/create-a-react-application-from-scratch-part-1-introduction-b2e66dfb3aae

#### Created file "package.json"
```sh
ran "npm init" to create package.json
```
#### Created file ".editorconfig" with these contents:
```
root = true

# General settings for the whole project
[*]
indent_style = space
end_of_line = lf
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true

# Format-specific overrides
[*.md]
max_line_length = 0
trim_trailing_whitespace = false
```
#### Created file ".eslintrc" with the following contents:
```
{
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```
#### Installed ESLint
had to re-do this with version 5.12.0 specified for React
```
npm install --save-dev eslint@5.12.0
```
#### Installed AirBnB Style guide and dependencies:
```
ran "npm install --save-dev eslint-config-airbnb"
ran "npm install --save-dev eslint-plugin-import"
ran "npm install --save-dev eslint-plugin-jsx-a11y"
ran "npm install --save-dev eslint-plugin-react"
```
#### Added AirBnB setting to file ".eslintrc"
```
"extends": "airbnb",
```
The updated ".eslintrc" file contents:
```
{
  "extends": "airbnb",
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  }
}
```
#### Installed ESlint 1.8.0 extension in VS Code
Clicked ESLint 1.8.0 in Visual Studio Code Extensions view

#### Added npm script for Linting
In file "package.json", updated "scripts" to include:
```
"lint": "eslint . --ext .js,.jsx",
```

#### Enforced linting pre-commit hook
Added pre-commit dependency to project:
```
npm install --save-dev pre-commit
```
Added "pre-commit" section to package.json:
```
"pre-commit": [
  "lint"
]
```
This keeps commits from happening if there are linting errors

# Dev Notes during Express installation
#### Installed Express module 4.16.4
```
npm install --save express
```
#### Installed http module
```
npm install --save http
```
#### Update file "index.js"
new content:
```
const express = require('express');
const http = require('http');

// Express app setup
const app = express();

const server = http.createServer(app);
server.listen(3000);
server.on('listening', () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port: 3000');
});

app.get('*', (req, res) => {
  res.end('Hello World!');
});
```
# Dev Notes during Express Installation II
#### Created standard Express directory structure
```
/bin
/public  - static files (images, CSS, scripts, etc.)
/routes  - route handlers for application
/server  - contains server file that starts application
/views  - templates
```
#### Created file "www" in /bin:
Contents:
```
#!/usr/bin/env node
```
#### Create file "index.js" in /server
Contents:
```
/**
 * Module dependencies.
 */
const http = require('http');
const express = require('express');
/**
 * Express app setup
 */
const app = express();
/**
 * Simple logger function.
 */
function log(message) {
  process.stdout.write(`${message}\n`);
}
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || 5000);
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
let availablePort = port;
/**
 * Listen on provided port, on all network interfaces.
 */
function startServer(serverPort) {
  server.listen(serverPort);
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = `${
    typeof port === 'string' ? 'Pipe' : 'Port'
  } ${port}`;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      if (availablePort - port < 10) {
        availablePort += 1;
        startServer(availablePort);
      } else {
        log(`${bind} is already in use`);
        process.exit(1);
      }
      break;
    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = `${
    typeof addr === 'string' ? 'pipe' : 'port'
  } ${
    typeof addr === 'string' ? addr : addr.port
  }`;
  log(`Server is listening on ${bind}`);
  log(`Visit: http://localhost:${addr.port}`);
}
/**
 * Start server.
 */
server.on('error', onError);
server.on('listening', onListening);
startServer(availablePort);
```
#### Updated file "package.json"
Change start script to
```
"start": "node ./server/index.js"
```
#### Added file "app.js"
Contents:
```
/**
 * app.js
 */
const express = require('express');
// Express app setup
const app = express();
module.exports = app;
```
#### Updated file "/server/index.js"
Added require for app.js and removed old references to app and express
```
const app = require('../app');
```
#### Added module nodemon as Dev dependency
```
npm install --save-dev nodemon
```
#### Updated file "package.json" to add script "dev"
```
"dev": "nodemon --exec node ./server/index.js",
```
#### Added file "/routes/index.js"
Contents:
```
const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('*', (req, res) => {
  res.render('index');
});
module.exports = router;
```
#### Modified file "app.js"
Added code for routes:
```
const routes = require('./routes');
... (after // Express app setup)
// use routes
app.use('/', routes);
```
#### Modified file "app.js"
Added code for views:
```
const path = require('path');
... (before //use routes):
// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

```
#### Installed module "pug" view engine
```
npm install --save pug
```
#### Created file "/views/index.pug"
Contents:
```
doctype html
html
  head
    title Hello World!
  body
    h1 Hello World!
```
#### Modified file "app.js"
Added error handler:
```
// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  next();
});
```
#### Modified file "app.js"
Added 404 error handler
```
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
```
#### Modified file "app.js"
Added serving static files from 'public' folder
```
// serve static files from 'public'
app.use(express.static(path.join(__dirname, './public')));
```
#### Installed module 'dotenv'
```
npm install --save dotenv
```
#### Modified file "app.js"
```
const dotenv = require('dotenv');

// use dotenv
dotenv.config({
  silent: true;
});
```
#### Created file ".env.example"
Contents:
```
# Example ENV variables file
```
#### Created file ".env"
Contents:
```
# ENV variables file
```
#### Installed module 'morgan' for logging
```
npm install --save morgan
```
#### Modified file "app.js"
```
const logger = require('morgan');

// logger
app.use(logger('combined'));
```
#### Installed module 'body-parser'
```
npm install --save body-parser
```
#### Modified file "app.js"
```
const bodyParser = require('body-parser');

// body parser
app.use(bodyParser.json());
```
#### Installed module 'cookie-parser'
```
npm install --save cookie-parser
```
#### Modified file "app.js"
```
const cookieParser = require('cookie-parser');

// cookie parser
app.use(cookieParser());
```
# Setting up React with Express
based on https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3

#### Modified file "app.js"
Added static route for React files before // routes call:
```
// serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

```
#### Modified file "routers/index.js"
Commented out old * route and Added content:
```
/* GET API Test List */

router.get('/api/getList', (req, res) => {
  const list = ['item1', 'item2', 'item3'];
  res.json(list);
  // eslint-disable-next-line no-console
  console.log('Sent list of items');
});

/* GET home page. */
router.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

```
#### Installed create-react-app module
```
npm install -g create-react-app
```
#### Created the React app in client folder
```
create-react-app client
```
received message:
```
Success! Created client at D:\Users\Development\github\web\client
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd client
  npm start

Happy hacking!
```
Tried running, got error about eslint, 
had to remove node-modules in root and /client 
and then npm install both project directories.
That resolved eslint issue. React running successfully

#### Added React-Router and two pages, Home and List
Installed package 'react-router-dom':
```
npm install --save react-router-dom
npm install --save typescript@*
npm install -g react@^5  //probably didn't need to do this
```

Modified file "/client/src/index.js", commenting out existing and inserting
content:
```
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App/App';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
```

Modified file "/client/src/App.js", commenting out existing and inserting
content:
```
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
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
```

Added folders to "/client/src":
```
App
 pages
```

Moved files "App.css" and "App.js" and "logo.svg" into new App folder

Created file "/client/src/App/pages/Home.js" and inserted
content:
```
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;
```

Created file "/client/src/App/pages/List.js" and inserted
content:
```
import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;
```

#### Modified file "/client/package.json" 
To start backend and client apps with one script
changed script 'start':
```
 "start": "node ../server/index.js | react-scripts start",
```

# Starting Application 
In folder "/client:
```
npm start
```

This should start both projects and open a browser to the Home Page.

# END OF README
