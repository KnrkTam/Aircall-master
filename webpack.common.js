const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};


 const path = require("path");
 const HtmlWebpackPlugin = require("html-webpack-plugin");

 module.exports = {
   entry: {
     app: "./src/index.js",
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: "Production",
     }),
   ],
   output: {
     filename: "[name].bundle.js",
     path: path.resolve(__dirname, "dist"),
     clean: true,
   },
 };