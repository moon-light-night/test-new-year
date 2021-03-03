import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/FirstPage/FirstPage.vue'),
  },
  {
    path: '/second-page',
    name: 'SecondPage',
    component: () => import('../views/SecondPage/Page.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
