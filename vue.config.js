const { defineConfig } = require('@vue/cli-service')
//vant配置
const { VantResolver, VantImports } = require('@vant/auto-import-resolver');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
//
lintOnSave: false,


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //vant配置
  configureWebpack: {
    plugins: [
      //当 unplugin-vue-components 版本大于等于 0.26.0 时，使用以下写法
      AutoImport.default({
        imports: [VantImports()],
        resolvers: [VantResolver()],
      }),
      Components.default({ resolvers: [VantResolver()] }),
    ],
  },
})
