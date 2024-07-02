import HtmlWebpackPlugin from "html-webpack-plugin";
const Dotenv = require("dotenv-webpack");

module.exports = {
  devServer: {
    port: 5000,
    historyApiFallback: true, //for react router
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".css", ".jpeg"],
  },
  plugins: [new HtmlWebpackPlugin(), new Dotenv()],
};
