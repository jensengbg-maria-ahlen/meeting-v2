module.exports = {
  devServer: {
      disableHostCheck: true,
      port: 8080,
      proxy: 'http://localhost:8000/'
  },
  publicPath: "/"
}