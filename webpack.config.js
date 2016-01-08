var isProd         = process.env.MIX_ENV === 'prod' || process.env.MIX_ENV === 'production'
  , webpack        = require('webpack')
  , path           = require('path')
  , autoprefixer   = require('autoprefixer')
  , csswring       = require('csswring')
  , mqpacker       = require('css-mqpacker')
  , values         = require('postcss-modules-values')
  , postcss_nested = require('postcss-nested')
  , postcss_color  = require('postcss-color-function')
  , package        = require('./package.json')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')

var cssLoaders = 'style!css?modules!postcss'

var publicPath = 'http://localhost:4001/'

function extract(loaders) {
  return ExtractTextPlugin.extract('style',  loaders.substr(loaders.indexOf('!')))
}

var entry = './client/index.jsx'

module.exports = {
  debug: !isProd
, devtool: 'cheap-module-eval-source-map'
, entry: isProd ? entry : [
    entry
  , `webpack-hot-middleware/client?path=${publicPath}__webpack_hmr`
  ]

, output: {
    path: path.join(__dirname, './priv/static/js')
  , filename: 'bundle.js'
  , publicPath: publicPath
  }

, module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/
      }
    , {test: /\.css$/, loader: isProd ? cssLoaders : cssLoaders}
    , {test: /\.png$/, loader: "url?limit=100000&mimetype=image/png"}
    , {test: /\.svg$/, loader: "url?limit=100000&mimetype=image/svg+xml"}
    , {test: /\.gif$/, loader: "url?limit=100000&mimetype=image/gif"}
    , {test: /\.jpg$/, loader: "file"}
    ]
  }

, postcss: function() {
    return [
        values
      , postcss_nested
      , postcss_color
      , autoprefixer
      , mqpacker
      , csswring
    ]
  }

, plugins: isProd ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ] : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

, resolve: {
    modulesDirectories: [ 'app', 'node_modules' ]
  , extensions: ['', '.js', '.json', '.jsx', '.css']
  }
};
