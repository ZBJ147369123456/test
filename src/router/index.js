import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../views/Home')
const profile = () => import('../views/Profile')
const lei = () => import('../views/Lei')
const shop = () => import('../views/Shop')



Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'myBar',
    component: home
  },
  {
    path:'/home',
    name:'home',
    component:home
  },
  {
    path:'/profile',
    name:'profile',
    component:profile
  },
  {
    path:'/lei',
    name:'lei',
    component:lei
  },
  {
    path:'/shop',
    name:'shop',
    component:shop
  }
]

export default new Router({
  routes,
  mode:'history'
})
