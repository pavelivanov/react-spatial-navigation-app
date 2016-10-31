var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = (webpackConfig) => {
  delete webpackConfig.devtool
  
  webpackConfig.module.loaders = webpackConfig.module.loaders.map((loader) => {
    if (loader.test.test('*.css') || loader.test.test('*.styl')) {
      loader.loader = ExtractTextPlugin.extract('style', loader.loader.replace('style!', ''))
    }

    return loader
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin('assets/css/[name].[hash:6].css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: true
      }
    })
  )

  return webpackConfig
}
