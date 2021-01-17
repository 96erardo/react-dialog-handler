const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: [
            "@babel/env",
            "@babel/preset-react"
          ]
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
};