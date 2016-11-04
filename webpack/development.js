import config from '../config'


export default (webpackConfig) => {
  webpackConfig.devServer = {
    publicPath: webpackConfig.output.publicPath,
    stats: 'errors-only',
    noInfo: true,
    lazy: false,
  }

  return webpackConfig
}
