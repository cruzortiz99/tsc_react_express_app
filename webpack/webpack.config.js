var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './front-end/src/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/front-end'
  },
  devtool: 'inline-source.map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(tsx*)$/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      {
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
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'front-end/index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true
  }
}
