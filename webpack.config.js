const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
            }
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new webpack.EnvironmentPlugin({
      API_URL: 'Gabriel'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: '/',
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
