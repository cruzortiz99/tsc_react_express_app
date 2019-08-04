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

   1.3. Setup to split code into several modules

   ```json
   // tsconfig.json
   {
   "compilerOptions": {

    "target": "es5",
    // allows code splitting
    "module": "esnext" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    // ...
   ```
   
