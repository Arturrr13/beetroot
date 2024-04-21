import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: () => import('../views/ConfirmationView.vue')
  },
  {
    path: '/confirmation-done',
    name: 'ConfirmationDone',
    component: () => import('../views/ConfirmationDone.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/password-update',
    name: 'PasswordUpdate',
    component: () => import('../views/PasswordUpdateView.vue')
  },
  {
    path: '/user-:afterUser(.*)',
    name: 'UserMenu',
    component: () => import('../views/UserMenuView.vue')
  },
  {
    path: '/security',
    name: 'SecurityView',
    component: () => import('../views/SecurityView.vue')
  },
  {
    path: '/security-done',
    name: 'SecurityDone',
    component: () => import('../views/SecurityDone.vue')
  },
  {
    path: '/terms-of-use',
    name: 'TermsOfUse',
    component: () => import('../views/TermsOfUse.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  base: '/xd/'
})

export default router
