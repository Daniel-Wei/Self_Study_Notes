### React Mini Project Notes

#### 1. Basic Commands
- npx run-scripts build
- npx run-scripts start
- in package.json
  ```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ```
- React语法检查：in package.json
  ```json
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  ```
