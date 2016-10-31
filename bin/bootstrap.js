const path      = require('path')
const modPath   = require('app-module-path')

modPath.addPath(path.join(__dirname, '../../local_modules'))
modPath.addPath(path.join(__dirname, '../../client'))
modPath.addPath(path.join(__dirname, '../../shared'))

require('babel-register')
