import { createApp } from 'vue'
import './theme/style.css'
import './theme/tailwind.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routers'
const app = createApp(App)
const pinia = createPinia()
//注册pinia插件
app.use(pinia)
app.use(router)
app.mount('#app')
