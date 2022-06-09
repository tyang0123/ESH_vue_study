import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hailey',
    name: 'hailey',
           component: () => import(/* webpackChunkName: "hailey" */ '../views/HaileyView.vue')

  },
  {
    path: '/sunny',
    name: 'sunny',
       component: () => import(/* webpackChunkName: "sunny" */ '../views/SunnyView.vue')

  },
  {
    path: '/emma',
    name: 'emma',
    component: () => import(/* webpackChunkName: "emma" */ '../views/EmmaView.vue')
    
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
