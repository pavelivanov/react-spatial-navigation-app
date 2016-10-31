var path = require('path')


module.exports = [
  {
    test   : /\.(png|ico|jpg|jpeg|gif|svg(\?.*)?)$/,
    loader : 'file',
    query: {
      context: path.join(__dirname, '../../build'),
      name: 'images/[name].[ext]'
    }
  }
]


// import path from 'path'
//
//
// const query = {
//   context: path.join(__dirname, '../../build'),
//   name: 'images/[ext]/[name]_[hash:6].[ext]',
// }
//
// export default [
//   {
//     test: /\.(png|ico|jpg|jpeg|gif)$/,
//     loader: 'file',
//     query
//   },
//   {
//     test: /\.svg(\?.*)?$/,
//     loader: 'file',
//     query
//   },
// ]

