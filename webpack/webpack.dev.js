const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const common = require('./webpack.common');

module.exports = merge([
  common,
]);
