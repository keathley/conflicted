#!/usr/bin/env node
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  contentBase: 'http://localhost:4001',
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true }
}).listen(4001, '0.0.0.0', function (err, result) {
  if (err)
    console.error(err)
})

// Exit on end of STDIN
process.stdin.resume()
process.stdin.on('end', function () {
  process.exit(0)
})
