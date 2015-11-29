var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        bundle: './js/main.js'
    },
    output: {
        path : require("path").resolve("build/"), // output.path field is necessary if using webpack-dev-server API
        filename: '[name].js',
        publicPath : 'build/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                //loader: 'style!css'
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                //loader: 'style!css!less'
                loader: ExtractTextPlugin.extract("style-loader", "css-loader", "less-loader")
            },
            {
                test: /\.jpg$/,
                loader: 'url?limit=4'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.less', '.css']
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};