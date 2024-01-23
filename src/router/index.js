import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home/index.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About/index.vue')
    }
  ]
})
