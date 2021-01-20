import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import test2 from '../views/test2.vue'
import test3 from '../views/test3.vue'
import test4 from '../views/test4.vue'
import test5 from '../views/test5.vue'
import test6 from '../views/test6.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test2',
    name: 'test2',
    component: test2
  },
  {
    path: '/test3',
    name: 'test3',
    component: test3
  },
   {
    path: '/test4',
    name: 'test4',
    component: test4
  },
  {
    path: '/test5',
    name: 'test5',
    component: test5
  },
  {
    path: '/test6',
    name: 'test6',
    component: test6
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
