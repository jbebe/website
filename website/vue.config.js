module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      // add markdown loader
      .rule('markdown-loader')
        .test(/\.md$/)
        .use('html-loader')
          .loader('html-loader')
          .end()
        .use('markdown-loader')
          .loader('markdown-loader')
          .end()
  },
}