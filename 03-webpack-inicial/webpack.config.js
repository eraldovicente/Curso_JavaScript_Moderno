const HtmlWebPackPlugin = require('html-webpack-plugin');
 
 
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
                    minimize: true
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
 
    
}
 
 