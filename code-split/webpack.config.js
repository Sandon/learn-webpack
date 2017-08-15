const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const DynamicImportWebpack = require('babel-plugin-dynamic-import-webpack').default
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    /*new HTMLWebpackPlugin({
      title: 'Code Splitting'
    })*/
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      /*{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-3'],
            plugins: [DynamicImportWebpack]
          }
        }
      }*/
    ]
  }
}
