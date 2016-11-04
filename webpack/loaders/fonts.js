import config from '../../config'

const filename = {
  context: config.paths.build(),
  name: 'fonts/[name].[ext]',
}

export default [
  { 
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
    loader: 'url',
    query: {
      ...filename,
      limit: 10000,
      mimetype: 'application/font-woff'
    },
  },
  { 
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
    loader: 'file',
    query: {
      ...filename,
    },
  },
]
