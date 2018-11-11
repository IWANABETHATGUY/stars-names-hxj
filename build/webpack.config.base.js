const path = require('path');

const context = path.join(__dirname, 'src');

module.exports = {
  context,
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].umd.js',
    libraryTarget: 'umd',
    library: 'starsWarsNames',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: context,
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        include: context,
      },
    ],
  },
};
