/**
 * Created by Sandon on 2017/8/9.
 */
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
  ],
  devtool: 'inline-source-map'
}
