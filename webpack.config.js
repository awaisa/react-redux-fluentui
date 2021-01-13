const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/public',
    //publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
  },
  module: {
    rules: [
      {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
      },
    ]
  },
  resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        templateContent: `
<html>
<head></head>
<title>react redux fluent ui - test </title>
<body>
  <div id="root"></div>
</body>
</html>`
}),
  ],
};
  