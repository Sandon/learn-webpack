var path = require("path");
var webpack = require('webpack');
var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
    entry: {
        bundle1: './main1.js',
        bundle2: './main2.js'
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: 'build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    plugins: [
        definePlugin,
        new webpack.ProvidePlugin({
            $: './jquery.js',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        })
    ],
    externals: {
        'data': 'data'
    }
};

console.log('process.env.DEBUG: ' + process.env.BUILD_DEV);