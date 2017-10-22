/* WEBPACK DEV
 *
 * This module is the entry point for `yarn start`.
 * In addition to doing everything that webpack.common.js does, it will 
 *
 *  - Silence some of the more annoying dev-server output
 *  - Allow other applications (ie flask applications) to use localhost:8080/ 
 *    as an endpoint for their css, js and whatever else files.
 */

const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const common = require('./webpack.common');

module.exports = merge([
  common,
  {
    devServer: { /* Silence some annoying dev-server output */
      stats: {
        children: false,
        modules: false,
      },
      headers: { /* allow other applications use the dev-server endpoint */
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
]);
