var ExtractTextPlugin = require('extract-text-webpack-plugin')

var extractCSS = new ExtractTextPlugin('./[name].css')

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: './public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.scss$/i, loader: extractCSS.extract(['css','sass']) },
      { test: /\.jsx?$/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    extractCSS
  ]
}
