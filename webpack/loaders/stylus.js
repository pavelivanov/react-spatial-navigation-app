module.exports = [
  {
    test: /\.styl$/,
    loader: 'style!css?sourceMap&modules&localIdentName=[local]__[hash:base64:5]&importLoaders=1!stylus?url resolve'
  }
]
