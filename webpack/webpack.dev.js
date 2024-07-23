const webpack = require('webpack');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('development'),
      'process.env': JSON.stringify(process.env)
    })
  ]
};
