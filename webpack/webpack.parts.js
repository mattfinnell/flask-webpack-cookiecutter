/* WEBPACK PARTS
 *
 * This module is a library of individual webpack features. 
 *
 * Having to hand code all of these into a webpack.prod.js or 
 * webpack.dev.js will quickly make are * code look like the 
 * following http://chriest.studio/images/callbackhell.jpg.
 */

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BabelWebpackPlugin = require('babel-minify-webpack-plugin');

const assetsDir = path.join('website', 'static');
const buildDir = path.join(assetsDir , 'build');
const publicPth = path.join('static', 'build');

exports.PATHS = {
  assets: path.resolve(assetsDir),
  output: path.resolve(buildDir),
  public: path.join('static', 'build'),
};

exports.extractCSS = ({test, output, use} = {}) => {
  const plugin = new ExtractTextPlugin({
    filename: output,
  });

  return {
    module: {
      rules: [{
        test,
        use: plugin.extract({
          use,
        }),
      }],
    },
    plugins: [plugin],
  };
};

exports.loadJavaScript = ({ include, exclude }) => ({
  module: {
    rules: [{
      test: /\.js$/,
      include,
      exclude,
      loader: 'babel-loader',
    }],
  },
});

exports.minifyJavaScript = () => ({
  plugins: [
    new BabelWebpackPlugin(),
  ],
});

exports.clean = (dirsToClean, options ={}) => ({
  plugins: [
    new CleanWebpackPlugin(dirsToClean, options),
  ],
});
