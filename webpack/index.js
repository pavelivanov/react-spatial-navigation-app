const path      = require('path')
const modPath   = require('app-module-path')

modPath.addPath(path.resolve(__dirname, '../client'))
modPath.addPath(path.resolve(__dirname, '../server'))
modPath.addPath(path.resolve(__dirname, '../shared'))

require('babel-register')

module.exports = require(`./${ process.env.NODE_ENV || 'development' }`)(require('./default'))
