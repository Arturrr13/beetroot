import { createRouter, createWebHashHistory } from 'vue-router'
import { useCounterStore } from '../store/lang'
import i18n from '../i18n'

const routes = [
  {
    path: `/:lang/`,
    name: '/',
    meta: { title: (lang: string) => i18n(lang).global.t(`nav.nav-home`) },
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: `/:lang/movies`,
    name: '/chat',
    meta: { title: (lang: string) => i18n(lang).global.t(`nav.nav-chat`) }, 
    component: () => import('../pages/MoviesPage.vue')
  },
  {
    path: `/:lang/chat`,
    name: '/chat',
    meta: { title: (lang: string) => i18n(lang).global.t(`nav.nav-chat`) }, 
    component: () => import('../pages/ChatPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.afterEach( async (to, from) => {
  const store = useCounterStore()
  if(to.fullPath !== from.fullPath){
    router.push(`/${store.coin}${String(to.name)}`)
  } else if(from.fullPath === '/'){
    router.push(`/${store.coin}${from.fullPath}`)
  }
  if(typeof to.meta.title == 'function') document.title = to.meta.title(store.coin)
})

export default router