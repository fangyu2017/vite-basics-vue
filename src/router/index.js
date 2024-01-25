import { createRouter, createWebHistory } from 'vue-router'
import activity from './modules/activity'

export default createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE),
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' }
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home/index.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About/index.vue')
    },
    activity
  ]
})
