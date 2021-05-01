const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html/i,
                use: [
                {
                    loader: "html-loader", 
                    options: {
                        minimize: true
                    }
                }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: ["file-loader?name=assets/[name].[ext]", 
                {
                    loader: "image-webpack-loader",
                },
                ],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./"
                        }
                    },
                    "css-loader"
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        }),
        new MiniCssExtractPlugin(),
    ],
};