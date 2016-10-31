module.exports = [
  {
    test: /\.css$/,
    loader: 'style!css?modules&localIdentName=[local]___[hash:base64:5]',
    include: [ /wombocompo/, /react-notify-me/ ]
  },
  {
    test: /\.css$/,
    loader: 'style!css',
    exclude: [ /wombocompo/, /react-notify-me/ ]
  }
]
