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
#### Installed ESlint 1.8.0 exstension in VS Code
Clicked ESLint 1.8.0 in Visual Studio Code Extensions view

#### Added npmn script for Linting
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
