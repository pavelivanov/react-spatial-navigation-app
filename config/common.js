import path from 'path'


const basePath = path.resolve(__dirname, '../')

const http = {
  host: 'localhost',
  port: process.env.PORT || 2000,
}

const paths = {
  base: (file = '') => path.join(basePath, file),
  client: (file = '') => path.join(basePath, 'client', file),
  build: (file = '') => path.join(basePath, 'build', file),
  publicPath: `http://${http.host}:${http.port}`,
}


export default {
  http,
  paths,
}
