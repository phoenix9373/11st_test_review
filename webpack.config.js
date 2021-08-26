const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js" // output에서 main이 이름이 된다.
  },
  output: {
    path: path.resolve('./dist'),
    filename: "[name].js" // entry에서 설정한 main이 name이 된다.
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: '/',
    host: 'dev.domain.com',
    overlay: true,
    port: 8080,
    stats: 'errors-only',
    historyApiFallback: true, // 히스토리 API를 사용하는 SPA 개발시 설정. -> 404 발생 시 index.html로 리다이렉트함.
  }
};
