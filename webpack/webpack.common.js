/* WEBPACK COMMON 
 *
 * This module will export code that is necessary to the configuration of
 * both production and development environments.
 *
 * dev and prod builds will always involve the following
 *  - build and convert nice es6+ javascript to crappy oldschool javascript
 *  - build css files
 *  - output all built files to /website/static/build/
 */

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
