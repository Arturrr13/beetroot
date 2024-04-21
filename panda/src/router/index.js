import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorites',
    name: 'FavoritesView',
    component: () => import('../views/FavoritesView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  base: '/panda/'
})

export default router
