import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import roteador from './router/index.ts'
import { key, store } from './store/index.ts'

createApp(App)
    .use(roteador)
    .use(store, key)
    .mount('#app')