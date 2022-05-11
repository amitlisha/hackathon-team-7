import Vue from 'vue'
import VueRouter from 'vue-router'
import ShellView from '@/components/Shell/ShellView'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: ShellView },
    { path: '/login', component: ShellView}
  ]

const router = new VueRouter({
    routes // short for `routes: routes`
  })

  export default router