let path = require('path');
let images = require('./webpack/images.js');
module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  module: {
      rules: [
        {
          test:/\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options:{
            name: '/image/[name].[ext]',
            publicPath : '.',
            outputPath :  '.',
           }
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader',
             // compiles Less to CSS
            },
          ],
        },
      ],
    },
  devServer: {overlay: true},
};