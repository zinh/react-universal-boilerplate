var nodeExternals = require('webpack-node-externals')

var server = {
  entry: {
    server: './src/server/index.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}

var client = {
  entry: {
    client: './src/client/index.js'
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}

module.exports = [ server, client ]
