var path                  = require('path')
var express               = require('express')
var bodyParser            = require('body-parser')


const isDeveloping = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3333
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


if (isDeveloping) {
  var webpack               = require('webpack')
  var config                = require('../../webpack')
  var webpackMiddleware     = require('webpack-dev-middleware')
  var webpackHotMiddleware  = require('webpack-hot-middleware')

  const compiler = webpack(config)
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: config.entry[0],
    noInfo: true,
    stats: 'errors-only',
    hot: true,
    lazy: false
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../../build/index.html')))
    res.end()
  })
}
else {
  app.use(express.static(path.resolve(__dirname, '../../build')))
  app.get('*', function response(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../../build') })
  })
}


app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
})
