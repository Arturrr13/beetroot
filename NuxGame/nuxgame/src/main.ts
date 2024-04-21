import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import i18n from './i18n.js'
import App from './App.vue'
import { useCounterStore } from './store/lang'
import './assets/css/styles.scss'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const store = useCounterStore()

app.use(i18n(store.coin)).use(router).mount('#app')

