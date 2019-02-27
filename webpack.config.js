const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const SRC_PATH = path.join(`${__dirname}/src`);
const PUBLIC_PATH = path.join(`${__dirname}/public`);

const env = process.env.NODE_ENV || "production";

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
    new CopyPlugin([
      path.join(`${PUBLIC_PATH}/manifest.json`),
      {
        from: path.join(`${PUBLIC_PATH}/images`),
        to: "images"
      }
    ])
  ],
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  resolve: {
    modules: [SRC_PATH, "node_modules"],
    extensions: [".js"]
  }
};
