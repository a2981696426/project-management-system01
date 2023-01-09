module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/metronic8/vue/demo7/" : "/",
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  },
  lintOnSave: false,
};
