import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/weather/:city',
    name: 'weather',
    component: () => import('../views/Weather.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
