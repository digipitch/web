# Digipitch Main Website 
Web Server for Digipitch

# Dev Notes during initial setup
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
```
ran "npm install --save-dev eslint" to add ESLint
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
