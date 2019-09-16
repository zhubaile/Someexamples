const path = require('path')
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

function resolve (dir) {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/myvue/'
    : '/',
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  // pages: {
  // index: {
  // page 的入口
  // *  entry: 'src/pages/index/index.js',
  // 模板来源
  // *   template: 'src/pages/index/index.html',
  // 在 dist 的输出为 index.html
  //*   filename: 'index.html',
  // 当使用 title 选项时，
  // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //* title: '首页',
  // 在这个页面中包含的块，默认情况下会包含
  // 提取出来的通用 chunk 和 vendor chunk。
  //* chunks: ['chunk-vendors', 'chunk-common', 'index']
  // }
  // 当使用只有入口的字符串格式时，
  // 模板会被推导为 `public/subpage.html`
  // 并且如果找不到的话，就回退到 `public/index.html`。
  // 输出文件名会被推导为 `subpage.html`。

  // 多入口时，接着写子页面
  // subpage: 'src/subpage/main.js'
  // },
  devServer: {
    open: true,
    hot: true,
    host: HOST || 'localhost',
    port: PORT || 6217,
    https: false,
    hotOnly: false,
    proxy: {
      '/web/beta/v1.0': {
        target: 'http://192.168.1.121:3000',
        ws: true,
        changOrigin: true
        // pathRewrite: { // 为了替换路径，方便写
        //   '/web/beta/v1.0': '/web/beta/v1.0'
        // }
      }
      // '/web': {
      //   target: 'http://192.168.1.121:3000',
      //   ws: true,
      //   changOrigin: true
      //   pathRewrite: { // 为了替换路径，方便写
      //   '^/web': '/web/beta/v1.0'
      //   }
      // }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@ajax', resolve('src/assets/common/axios'))
      .set('@imgs', resolve('src/assets/img'))
  }
}
