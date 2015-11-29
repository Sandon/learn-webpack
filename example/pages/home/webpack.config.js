var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        bundle: './src/js/main.js',
        vendor: ['jquery', '../../modules/someModule/someModule.js']
    },
    output: {
        path : require("path").resolve("build/"), // output.path field is necessary if using webpack-dev-server API
        filename: '[name].js',
        publicPath : '../build/'
    },
    module: {
        loaders: [
            /*{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },*/
            {
                test: /\.less$/,
                //loader: 'style!css!less'
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.jpeg$/,
                loader: 'url?limit=4'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.less', '.css']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( chunkName= "vendor",  filename= "vendor.bundle.js"),
        new ExtractTextPlugin("styles.css")
    ]
};