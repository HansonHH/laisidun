const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  module: {
    rules: [
        {
            test: /\.html$/,
            loader: 'file-loader?name=[name].[ext]',
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        { 
            test: /(\.css$)/,
            loaders: ['style-loader', 'css-loader']
        }, 
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    ],
  devServer: {
    historyApiFallback: true
  }
}