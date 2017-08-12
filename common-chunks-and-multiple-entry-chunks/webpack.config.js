var webpack = require('webpack');
var commonPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    entry: {
        bundle1: './main1.js',
        bundle2: './main2.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    },
    plugins: [
      commonPlugin
    ],
    resolve: {
        extensions: ['', '.js']
    }
};