import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './plugins/store'
import router from './plugins/router'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(axios)
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
