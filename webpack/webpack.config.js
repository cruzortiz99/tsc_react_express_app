const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  /* Entry point for the ui */
  entry: {
    main: path.resolve(__dirname, '..', 'client', 'src', 'index.tsx'),
  },
  /* Output point of the bundle */
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'client'),
  },
  devtool: 'inline-source.map',
  /* Require to make imports */
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        /* Handles js files */
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        /* Handles ts and tsx files */
        test: /\.(tsx*)$/,
        use: {
          loader: 'awesome-typescript-loader',
        },
      },
      {
        /* Handles CSS files */
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  /* Plugins for webpack */
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'client', 'index.html'),
    }),
  ],
  /* Dev server config */
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
}
