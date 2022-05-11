import Vue from 'vue'
import VueRouter from 'vue-router'
import ShellView from '@/components/Shell/ShellView'
import ManagementView from '@/components/Management/ManagementView'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: ShellView, children: [
      {
        path:'',
      },
      {
        path:'/management',
        component: ManagementView
      }
    ] },
    { path: '/login', component: ManagementView}
  ]

const router = new VueRouter({
    routes // short for `routes: routes`
  })

  export default router