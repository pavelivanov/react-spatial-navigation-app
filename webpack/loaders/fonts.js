var path = require('path')


const filename = {
  context: path.join(__dirname, '../../build'),
  name: 'fonts/[name].[ext]',
}

module.exports = [
  { 
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
    loader: 'url',
    query: {
      ...filename,
      limit: 10000,
      mimetype: 'application/font-woff'
    }
  },
  { 
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
    loader: 'file',
    query: {
      ...filename,
    }
  }
]

// export default [
//   {
//     test: /\.woff2(\?.*)?$/,
//     loader: 'url',
//     query: {
//       ...filename,
//       limit: 10000,
//       mimetype: 'application/font-woff2',
//     },
//   },
//   {
//     test: /\.woff(\?.*)?$/,
//     loader: 'url',
//     query: {
//       ...filename,
//       limit: 10000,
//       mimetype: 'application/font-woff',
//     },
//   },
//   {
//     test: /\.ttf(\?.*)?$/,
//     loader: 'url',
//     query: {
//       ...filename,
//       limit: 10000,
//       mimetype: 'application/octet-stream',
//     },
//   },
//   {
//     test: /\.eot(\?.*)?$/,
//     loader: 'file',
//     query: {
//       ...filename,
//     },
//   },
// ]
