import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MyHome.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/MyAbout.vue')
  },
  {
    path: '/presale',
    name: 'presale',
    component: () => import('../views/MyPresale.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: () => import('../views/MyFAQ.vue')
  },
  {
    path: '/crypto',
    name: 'crypto',
    component: () => import('../views/MyCrypto.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/cookies-policy',
    name: 'CookiesPolicy',
    component: () => import('../views/CookiesPolicy.vue')
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: () => import('../views/DisclaimerSite.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pageNotFound',
    component: () => import('../views/MyErr.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginUser.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterUser.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
  base:'/vue1/'
})

export default router
