module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: 'build/'

    },
    module: {
        loaders: [
            {
                test: /\.jpeg$/,
                loader: 'url?limit=4'
            }
        ]
    }
};