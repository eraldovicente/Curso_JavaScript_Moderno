const HtmlWebPack    = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin"); 
const CopyPlugin     = require("copy-webpack-plugin");

const CssMinimizer   = require('css-minimizer-webpack-plugin');
const Terser         = require('terser-webpack-plugin');
 
module.exports = {
 
    mode: 'development',
    output: {
         clean: true,
         filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: true
                },
            },
            {
               test: /\.css$/i,
               exclude: /styles.css$/i,
               use: ['style-loader', 'css-loader']
            },
            {
                 test: /styles.css$/i,
                 use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    },

    plugins: [
        new HtmlWebPack({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtract({
             filename: '[name].[fullhash].css',
             ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [                
                {
                    from: "src/assets",
                    to: "assets/"
                },
            ]
        })
    ]
 
    
}
 
 