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

#### 2. 组件
- 独立可复用的代码片段
- 函数式组件
  - 返回JSX的普通函数
  - 组件的首字母必须是大写
