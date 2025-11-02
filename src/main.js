import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './Router'


import { createHead } from '@vueuse/head'

const pinia = createPinia()
const app = createApp(App)

// 👇 create head manager
const head = createHead()

app.use(pinia)
app.use(router)
app.use(head) 
app.mount('#app')
