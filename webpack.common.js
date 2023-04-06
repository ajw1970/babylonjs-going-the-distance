const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const appDirectory = __dirname;

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "js/babylonBundle.js",
        path: path.resolve(appDirectory, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(appDirectory, "public/index.html"),
            inject: true
        })
    ]
};