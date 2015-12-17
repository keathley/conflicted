#!/usr/bin/env node
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(4001, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:4001');
});

process.stdin.resume()
process.stdin.on('end', function () {
  process.exit(0)
})
