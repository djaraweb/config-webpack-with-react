# Config Base webpack with React

Configuracion Base Webpack, Babel con React.js

#### Dependencias Requeridas

```
$ npm i react react-dom -S
$ npm i axios -S
```

#### Dependencias Desarrollo

```
$ npm i @babel/core @babel/preset-env @babel/preset-react babel-loader -D
$ npm i @babel/plugin-transform-runtime -D
$ npm i webpack webpack-cli webpack-dev-server clean-webpack-plugin -D
$ npm i html-loader html-webpack-plugin -D
$ npm i mini-css-extract-plugin css-loader sass sass-loader -D
$ npm i css-minimizer-webpack-plugin terser-webpack-plugin -D
$ npm i dotenv-webpack -D
```

#### Config file .babelrc

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

#### Config files webpack.config.dev.js and webpack.config.prod.js

#### Config scripts in file package.json

```
{
    "build": "webpack --config webpack.config.prod.js",
    "dev": "webpack --config webpack.config.dev.js",
    "start": "webpack serve --config webpack.config.dev.js"
}
```

#### Ejemplos de Apps

#### APP: Portafolio de Usuarios, Configuracion Varibles entorno

```
# Portafolio de Usuarios - con React, components, hooks
API_Portafolio=https://randomuser.me/api
```

![Home-Page-Portafolio](src/assets/screen_apps/homepageportafolio.png)
