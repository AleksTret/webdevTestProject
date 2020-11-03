const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),

    entry: {
        app: [
            "./js/index.js",
            "./scss/main.scss"
        ],
    },

    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "../",
    },

    module: {
        rules: [
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },                
                {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                },
                {
                    loader: 'sass-loader',
                    options: {sourceMap: true}
                },
            ],
        },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: "./css/[name].css"
            }
        )
    ],
}