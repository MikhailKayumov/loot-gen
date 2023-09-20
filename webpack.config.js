const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = async (env) => {
  const mode = env.mode ?? "production";

  return {
    mode,
    entry: path.resolve(__dirname, './src/index.ts'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./public/index.html")
      }),
      new MiniCssExtractPlugin({filename: "styles.css"}),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public/assets'),
            to: path.resolve(__dirname, 'dist'),
          },
        ],
      })
    ],
    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      hot: true,
      port: 3000,
    },
    devtool: 'eval-source-map'
  }
};
