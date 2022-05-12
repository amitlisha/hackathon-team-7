const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
  'resolve.fallback: { "stream": require.resolve("stream-browserify")
})
