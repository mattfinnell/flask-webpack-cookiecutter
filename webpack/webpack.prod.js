const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const common = require('./webpack.common');

module.exports = merge([
  common,
  parts.minifyJavaScript({}),
  parts.clean(['build'], parts.PATHS.assets),
]);
