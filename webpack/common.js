import path from 'path'
import webpack from 'webpack'
import requireDir from 'require-dir'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from '../config'


const lFolder = requireDir('./loaders')
const loaders = [].concat.apply([], Object.keys(lFolder).map((k) => lFolder[k]))

const globals = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
}


const webpackConfig = {
  target: 'web',

  entry: {
    app: [
      config.paths.client('index.js'),
    ],
  },

  output: {
    filename: 'js/[name].[hash:6].js',
    chunkFilename: 'js/[id].[hash:6].js',
    path: config.paths.build(),
    publicPath: config.paths.publicPath,
  },

  module: {
    loaders,
  },

  resolve: {
    fallback: [
      config.paths.base('node_modules'),
    ],
    modulesDirectories: [ 'client', 'shared', 'local_modules', 'node_modules' ],
    extensions: [ '', '.js', '.css', '.styl' ],
    alias: {
      'react-spatial-navigation': path.resolve('/Users/grammka/GitHubProjects/react-spatial-navigation/src'),
      'spatial-navigation': path.resolve('/Users/grammka/GitHubProjects/spatial-navigation/src'),
    }
  },
  resolveLoader: {
    root: config.paths.base('node_modules'),
  },

  plugins: [
    new webpack.DefinePlugin(globals),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Spatial Navigation',
      template: config.paths.client('assets/index.html'),
      //favicon: config.paths.client('assets/favicon-32x32.png'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true,
      // },
    }),
  ],

  stylus: {
    use: [
      require('nib')(),
    ],
    import: [
      '~nib/lib/nib/index.styl',
      '~assets/styl/_modules/index.styl',
    ],
  },
}

export default webpackConfig
