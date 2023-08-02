const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// This is main configuration object that tells Webpackw what to do. 
module.exports = {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(ttf|eot|svg)$/,
          type: 'asset/resource',
        },
      ],
    },
    mode: 'development',
    entry: {
      index: './src/index.js',
    },
    devServer: {
      static: './dist',
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Battleship',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
       path: path.resolve(__dirname, 'dist'),
       clean: true,
     },
     optimization: {
      runtimeChunk: 'single',
    },
    resolve: {
      alias: {
        config$: './configs/app-config.js',
        react: './vendor/react-master',
      },
      extensions: ['.js', '.jsx'],
      
    },
  };