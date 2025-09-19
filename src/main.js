import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

// 👇 import createHead from @vueuse/head
import { createHead } from '@vueuse/head'

const app = createApp(App)

// 👇 create head manager
const head = createHead()

app.use(router)
app.use(head) // 👈 add this
app.mount('#app')
