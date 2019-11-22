const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/cw.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'javascript', 'packs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      } ,{
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules'
        ]
      },
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  mode: 'production'
};


