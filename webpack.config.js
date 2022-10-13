const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module :{
    rules :[
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      }
    ]
  },
};