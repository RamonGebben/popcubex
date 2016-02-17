var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);
var HtmlWebpackPlugin = require('html-webpack-plugin');

var common = {

  entry: [path.resolve(ROOT_PATH, 'app/main')],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Popcubex',
      template: './templates/index.ejs',
      inject: 'body'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?stage=1'],
        include: path.resolve(ROOT_PATH, 'app')
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      },
      {
        test   : /\.(mp4|webm|gif|jpg|png?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};

switch (TARGET) {
  case 'build':
    module.exports = merge(common, {
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
      ]
    });

    break;

  case 'dev':
    module.exports = merge(common, {
      entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server'
      ]
    });
    break;
}
