const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  }
  //context: path.join(__dirname, 'your-app'),
  // plugins: [
  //   new CopyWebpackPlugin({
  //       patterns: [
  //           { from: 'psscript' }
  //       ]
  //   })
  // ]
});