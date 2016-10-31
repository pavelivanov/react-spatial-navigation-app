var path = require('path')
var webpack = require('webpack')
var requireDir = require('require-dir')
var HtmlWebpackPlugin = require('html-webpack-plugin')


var paths = {
  base: process.cwd(),
  client: path.join(process.cwd(), 'client/index.js'),
  build: path.join(process.cwd(), 'build')
}

const globals = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
}

const lFolder = requireDir('./loaders')
const loaders = [].concat.apply([], Object.keys(lFolder).map((k) => lFolder[k]))


module.exports = {
  //devtool: 'eval',
  //devtool: 'cheap-module-source-map',

  entry: [
    paths.client
  ],

  output: {
    path: paths.build,
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders
  },

  resolve: {
    fallback: [
      path.resolve(paths.base, 'node_modules'),
      path.resolve('/Users/grammka/GitHubProjects/react-spatial-navigation/node_modules'),
      path.resolve('/Users/grammka/GitHubProjects/spatial-navigation/node_modules'),
    ],
    modulesDirectories: [ 'client', 'shared', 'node_modules' ],
    extensions: [ '', '.js', '.css', '.styl' ],
    alias: {
      'react-spatial-navigation': path.resolve('/Users/grammka/GitHubProjects/react-spatial-navigation/src'),
      'spatial-navigation': path.resolve('/Users/grammka/GitHubProjects/spatial-navigation/src'),
    }
  },
  resolveLoader: {
    root: path.resolve(paths.base, 'node_modules'),
    modulesDirectories: [ 'node_modules' ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dribbbles!',
      template: `!!handlebars!${path.join(paths.base, 'client/assets/index.html')}`,
      filename: 'index.html',
      favicon: path.join(paths.base, 'client/assets/images/favicon.ico'),
      hash: false,
      cache: true,
      inject: 'body'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(globals)
  ],

  htmlWebpackPlugin: {
    files: {
      chunks: {
        app: {
          entry: paths.client,
          icon: [ 'assets/images/favicon.ico' ]
        }
      }
    }
  },

  stylus: {
    use: [
      require('nib')()
    ],
    import: [
      '~nib/lib/nib/index.styl',
      '~assets/styl/_modules/index.styl'
    ]
  }
}
