const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SRC_PATH = path.join(`${__dirname}/src`);
const PUBLIC_PATH = path.join(`${__dirname}/public`);

const env = process.env.NODE_ENV || "production";
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: env,
  context: SRC_PATH,
  entry: {
    app: ["index.js"]
  },
  output: {
    filename: "[name].[hash].js",
    path: path.join(`${__dirname}/dist`)
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(`${PUBLIC_PATH}/index.html`)
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ]
      }
    ]
  },
  resolve: {
    modules: [SRC_PATH, "node_modules"],
    extensions: [".js"]
  }
};
