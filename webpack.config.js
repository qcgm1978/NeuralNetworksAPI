const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const config = require("./package.json");

const webpack = require("webpack");
require("dotenv").config();

const PROD = process.env.NODE_ENV === "production";

let plugins = [];

module.exports = {
  mode: "none",
  entry: path.resolve(__dirname, config.main),
  devtool: "source-map",
  output: {
    library: process.env.NAME,
    libraryTarget: process.env.TARGET,
    path: __dirname,
    filename: PROD ? "build/BMI.min.js" : "build/BMI.js"
  },
  module: {
    rules: [
      { test: /\.es6?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: plugins,
  optimization: {
    minimizer: PROD
      ? [
          // we specify a custom UglifyJsPlugin here to get source maps in production
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
              compress: false,
              ecma: 6,
              mangle: true
            },
            sourceMap: true
          })
        ]
      : []
  }
};
