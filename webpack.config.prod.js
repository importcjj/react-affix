var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './example/src/index.js',

    output: {
        path: path.join(__dirname, 'example', 'dist'),
        filename: 'index.js',
        // publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: [path.join(__dirname, 'example')]
            }, {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
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