export default ({ http, paths }) => {
  return {
    http,
    paths: {
      ...paths,
      publicPath: '/'
    },
  }
}
