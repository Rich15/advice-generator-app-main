const path = require("path");
const webpack = require("webpack");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: "file-loader"
      },
      {
        test: /\.svg$/,
        use: "svg-url-loader"
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    static: "./dist",
    historyApiFallback: true
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    })
  ]
};