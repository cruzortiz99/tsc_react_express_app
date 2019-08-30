# tsc_react_express_app

Typescript React Express FullStack App

1. ## Typescript React Setup

   1.1. package.json dependencies

   ```json
   "dependencies": {
     // Adding react to the project
       "react": "^16.8.6",
       "react-dom": "^16.8.6"
     },
     "devDependencies": {
       // Adding react types to the project
       "@types/react": "^16.8.23",
       "@types/react-dom": "^16.8.4",
       // Loader to work with webpack
       "awesome-typescript-loader": "^5.2.1",
       // Loaders to work with js files
       "babel-core": "^6.26.3",
       "babel-preset-env": "^1.7.0",
       "babel-preset-react": "^6.24.1",
       // Plugin to process the html
       "html-webpack-plugin": "^3.2.0",
       // Adding typescript to the project
       "typescript": "^3.5.3",
       // Adding webpack and dev server to the project
       "webpack": "^4.36.1",
       "webpack-cli": "^3.3.6",
       "webpack-dev-server": "^3.7.2",
       // Loaders for the style and css files
       "css-loader": "^3.1.0",
       "style-loader": "^0.23.1",

     }
   ...
   ```

   1.2. webpack setup

   ```javascript
   module.exports = {
     /* Entry point for the ui */
     entry: {
       main: path.resolve(__dirname, '..', 'client', 'src', 'index.tsx')
     },
     /* Output point of the ui bundle */
     output: {
       filename: '[name].js',
       path: path.resolve(__dirname, 'dist', 'client'),
       publicPath: '/'
     },
     devtool: 'inline-source.map',
     /* Require to make imports */
     resolve: {
       extensions: ['.ts', '.tsx', '.js']
     },
     module: {
       rules: [
         {
           /* Handles js files */
           test: /\.(js)$/,
           exclude: /node_modules/,
           use: ['babel-loader']
         },
         {
           /* Handles ts and tsx files */
           test: /\.(tsx*)$/,
           use: {
             loader: 'awesome-typescript-loader'
           }
         },
         {
           /* Handles CSS files */
           test: /\.css$/,
           use: [
             {
               loader: 'style-loader'
             },
             {
               loader: 'css-loader',
               options: {
                 sourceMap: true
               }
             }
           ]
         }
       ]
     },
     /* Plugins for webpack */
     plugins: [
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoEmitOnErrorsPlugin(),
       new HtmlWebpackPlugin({
         /* Needs to exists*/
         template: path.resolve(__dirname, '..', 'client', 'index.html')
       })
     ],
     /* Dev server config */
     devServer: {
       host: 'localhost',
       port: 3000,
       historyApiFallback: true,
       open: false,
       hot: true
     }
   }
   ```

   1.3. setup to work with css modules

   ```javascript
   // webpack.config.js
   //...
             {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64]'
              },
              importLoaders: 0,
              localsConvention: 'camelCase'
            }
          }
   //...
   ```

   ```typescript
   // modules.css.d.ts
   // To use import class from '*.css'
   declare module '*.css' {
     interface IClassName {
       [className: string]: string
     }
     const className: IClassName
     export = className
   }
   ```

   If want autocompletion, must build a css.s.ts with the classes.

   1.4. Setup to split code into several modules

   ```json
   // tsconfig.json
   {
   "compilerOptions": {

    "target": "es5",
    // allows code splitting
    "module": "esnext" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    // ...
   ```

2. ## Typescript y Express
3. ## Prettier y eslint con Typescript y React

   3.1. Install the next dependencies

```json
//..
  "eslint-plugin-react": "^7.14.3",
  "eslint-config-prettier": "^6.0.0",
  "eslint-plugin-prettier": "^3.1.0",
  "prettier": "^1.18.2",
  "@typescript-eslint/eslint-plugin": "^1.13.0",
  "@typescript-eslint/parser": "^1.13.0"
//...
```

3.2. Setup the .eslintrc file

```json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "plugins": ["prettier", "@typescript-eslint"],
  "rules": {
    "indent": "off",
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "no-console": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/display-name": "off",
    "prettier/prettier": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
// ...
```

3.3. Setup the .prettierrc file

```json
{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "jsxSingleQuote": true
}
```

3.4. Setup the scripts

```json
// ...
    "dev": "npm run format:fix && webpack-dev-server --config ./webpack/webpack.config.js",
    "build": "webpack --config ./webpack/webpack.config.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "format": "eslint './client/src/**/*.{ts,tsx}' && prettier --check './client/src/**/*.{ts,tsx}' --loglevel 'error'",
    "format:fix": "eslint './client/src/**/*.{ts,tsx}' --fix && prettier --write './client/src/**/*.{ts,tsx}' --loglevel 'error'"
// ...
```

4. ## React Typescript with Babel

   4.1. Install dependencies:

   - @babel/cli
   - @babel/core
   - @babel/plugin-proposal-class-properties
   - @babel/plugin-proposal-numeric-separator
   - @babel/plugin-proposal-object-rest-spread
   - @babel/preset-env
   - @babel/preset-react
   - @babel/preset-typescript
   - babel-loader

     4.2. Setup `.babelrc`

   ```json
   {
     "presets": [
       [
         "@babel/env",
         {
           "targets": "> 1%, last 2 versions"
         }
       ],
       "@babel/react",
       "@babel/typescript"
     ],
     "plugins": [
       "@babel/proposal-class-properties",
       "@babel/proposal-object-rest-spread"
     ]
   }
   ```

   4.3. Setup `webpack.config.js`

   ```js
   // ...
     resolve: {
       extensions: ['.ts', '.tsx', '.js', '.jsx']
     },
     module: {
       rules: [
         {
           /* Handles js files */
           test: /\.(js|ts)x*$/,
           exclude: /node_modules/,
           use: ['babel-loader']
         },
     // ...
   ```

   4.4. Add a browser setup targets `.browserslistrc`. Optional, if you don't set up this on the `.babelrc`

   ```
   last 1 version
   > 1%
   ```
