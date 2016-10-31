export default (webpackConfig) => {
  webpackConfig.entry.push(
    'webpack-hot-middleware/client?path=/__webpack_hmr'
  )

  return webpackConfig
}
