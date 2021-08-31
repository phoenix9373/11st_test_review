const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js", // output에서 main이 이름이 된다.
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js", // entry에서 설정한 main이 name이 된다.
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"), // 서버를 통해 접근할 결과물
    publicPath: "/", // 접근할 url path
    // host: "dev.domain.com", // host 명이 필요한 경우,
    overlay: true, // error 등을 겹쳐서 보여줄지
    port: 8080, // 포트번호
    stats: "errors-only", // 메세지 출력 방식
    historyApiFallback: true, // 히스토리 API를 사용하는 SPA 개발시 설정. -> 404 발생 시 index.html로 리다이렉트함.
  },
};
