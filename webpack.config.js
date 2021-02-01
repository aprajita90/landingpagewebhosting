const webpack = require('webpack');
const path = require("path");
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    target: "web",
     resolve: {
        fallback: {
          fs: false,
          http:false,
          https:false,
          crypto:false,
          zlib:false,
          net:false,
          events:false
        }
      },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        chunkLoading: false,
        wasmLoading: false
    },
    module: {
        rules:[
            { test: /\.glsl$/, 
              use: 'webpack-glsl' 
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                   {
                        loader: "html-loader",
                        options: { minimize : false }
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                   {
                        loader: "file-loader",
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //"style-loader",
                     "css-loader",
                     //"sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "../index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
    ]
}