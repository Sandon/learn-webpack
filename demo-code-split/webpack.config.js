module.exports = {
    /*entry: ['./src/main.js'],*/
    entry: {
        bundle: './src/main.js'
    },
    output: {
        path: './build/',
        filename: '[name].js',
        publicPath : '/build/'
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
    resolve: {
        extensions: ['', '.js', '.less']
    }
};