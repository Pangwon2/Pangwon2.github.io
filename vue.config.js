const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  //npm run build 타겟 디렉토리
  outputDir:"../springBoot/sample/src/main/resources/static",

  devServer: {
    proxy: {
      '/': {
        target: "http://localhost:8080",
        changeOrigin: true,
      }
    }
  }
})
