export default ({ http, paths }) => {
  return {
    http,
    paths: {
      ...paths,
      publicPath: `http://${http.host}:${http.port}/`
    },
  }
}
