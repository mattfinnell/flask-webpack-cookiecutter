const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const path = require('path');

module.exports = merge([
  {
    entry: {
      app: path.resolve(parts.PATHS.assets, 'js', 'script.js'),
    },
    output: {
      path: parts.PATHS.output,
      publicPath: parts.PATHS.public,
      filename: 'js/[name].bundle.js',
    },
    devServer: {
      stats: {
        children: false,
        modules: false,
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
  parts.extractCSS({
    test: /\.css/,
    use: ['css-loader'],
    output: 'css/[name].css',
  }),
  parts.loadJavaScript({
    include: path.resolve(parts.PATHS.assets, 'js'),
    exclude: /node_modules/,
  }),
]);
