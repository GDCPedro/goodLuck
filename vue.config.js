module.exports = {
  devServer: {
    port: 9999,
    proxy: {
      "/": {
        target: "http://api.meetdeals.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/": ""
        }
      }
    }
  }
};
