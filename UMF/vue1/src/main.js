import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import './assets/css/main.scss'
import './assets/css/fonts.css'
import './assets/css/icomoon.css'
import './assets/css/burger.scss'
import './assets/css/responsive.scss'


createApp(App).use(router).use(store).use(VueCookies).mount('#app')









