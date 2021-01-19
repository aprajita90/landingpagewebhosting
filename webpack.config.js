const webpack = require('webpack');
const path = require("path");
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

//var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.js',
    target: "web",
    node: {
        // fs: 'empty',
        // module: 'empty',
        // net: 'empty',
        // global: false,
        // __filename: false,
        // __dirname: false
     },
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
        filename: 'main.[hash].js',
        chunkLoading: false,
        wasmLoading: false
    },
    //target:'node',
    // externals: [nodeExtenals()],
    
    //mode: "development",
    //externals: ["fs"],
    module: {
        rules:[
            { test: /\.glsl$/, 
              use: 'webpack-glsl' 
            },
            {
                test: /\.js$/,
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
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
    ]
}