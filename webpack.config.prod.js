var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './example/src/index.js',

    output: {
        path: path.join(__dirname, 'example', 'dist'),
        filename: 'index.js',
        // publicPath: '/',
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                path.join(__dirname, 'example')
            ]
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './example/src/index.html',
            inject: true,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false
        })
    ],
    
}