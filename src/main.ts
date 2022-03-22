import { createApp } from 'vue'
import router from './infrastructure/routing'
import App from './App.vue'
import './index.css'

createApp(App).use(router).mount('#app')
