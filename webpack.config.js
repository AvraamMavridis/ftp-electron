var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = {
  entry: {
  app: ['webpack/hot/dev-server', './src/js/index.js'],
},
target: 'node',
output: {
  path: './public/built',
  filename: 'bundle.js',
  publicPath: 'http://localhost:8081/built/'
},
devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:8081/built/'
},
externals: nodeModules,
module: {
 loaders: [
   { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
   { test: /\.css$/, loader: 'style-loader!css-loader' },
   {
     test: /\.scss$/,
     loaders: ["style", "css", "sass"]
   },
   { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
   { test: /\.json$/, loader: 'json-loader' },
 ]
},
 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
}
