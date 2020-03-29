const Timestamp = new Date().getTime()
module.exports = {
  configureWebpack: {
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${Timestamp}.js`,
      chunkFilename: `[name].${Timestamp}.js`
    },
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        style: '@/assets/style',
        api: '@/api'
      }
    }
  },
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8090, // 端口号
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    // proxy: 'http://39.104.88.170:49090'
    // proxy: 'http://39.104.88.170:48900'
    // proxy: 'http://39.104.88.170:48088' // 配置跨域处理,只有一个代理
    // proxy: 'http://39.104.88.170:9030' //uat 环境
    proxy: {
      '/api': {
        target: 'http://39.104.88.170:49090',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
      // '/sign': {
      //   //替换代理地址名称
      //   target: 'http://192.168.1.106:8082', //代理地址
      //   ws: true,
      //   changeOrigin: true, //可否跨域
      //   pathRewrite: {
      //     '^/sign': '/' //重写接口，去掉/api
      //   }
      // }
    } // 配置多个代理
  }
}
