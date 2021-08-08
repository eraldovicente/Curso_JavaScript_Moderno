const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin"); 
 
module.exports = {
 
    mode: 'development',
    output: {
         clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false
                },
            },
            {
               test: /\.css$/i,
               exclude: /styles.css$/,
               use: ['style-loader', 'css-loader']
            },
            {
                 test: /styles.css$/,
                 use: [ MiniCssExtract.loader, 'css-loader' ]
            }
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
        })
    ]
 
    
}
 
 