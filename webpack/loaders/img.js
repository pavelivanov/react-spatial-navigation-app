import config from '../../config'

export default [
  {
    test: /\.(png|ico|jpg|jpeg|gif|svg(\?.*)?)$/,
    loader: 'file',
    query: {
      context: config.paths.build(),
      name: 'images/[name].[ext]',
    },
  },
]
