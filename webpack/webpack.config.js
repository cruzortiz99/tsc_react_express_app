const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  /* Entry point for the ui */
  entry: {
    main: path.resolve(__dirname, '..', 'server', 'client', 'src', 'index.tsx')
  },
  /* Output point of the bundle */
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'server', 'client', 'dist'),
    // Makes react router work for subroutes
    publicPath: '/',
    // code splitting
    chunkFilename: '[name].module.js'
  },
  devtool: 'inline-source.map',
  /* Require to make imports */
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
              sourceMap: true,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64]'
              },
              importLoaders: 0,
              localsConvention: 'camelCase'
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
      template: path.resolve(__dirname, '..', 'server', 'client', 'index.html')
    })
  ],
  /* Dev server config */
  devServer: {
    host: 'localhost',
    port: 3000,
    // Makes react-router work for subroutes
    historyApiFallback: true,
    open: false,
    hot: true
  }
}
