/* WEBPACK PROD
 *
 * This module is the entry point for `yarn build` and `yarn exp`. 
 * In addition to doing everything that webpack.common.js does, it will 
 *
 *  - minify javascript
 *  - create a fresh /website/static/build directory for all files to build into.
 */

const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const common = require('./webpack.common');

module.exports = merge([
  common,
  parts.minifyJavaScript({}),
  parts.clean(['build'], parts.PATHS.assets),
]);
