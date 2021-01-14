const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/public',
    //publicPath: '/',
    filename: '[name].js'
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
  optimization: {
    splitChunks: { 
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all"
        }
      }  
    }
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
  