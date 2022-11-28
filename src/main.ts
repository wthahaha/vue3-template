import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import DataVVue3 from '@kjgl77/datav-vue3'
import 'virtual:windi.css'

const app = createApp(App)

app.use(router)
app.use(DataVVue3)
app.mount('#app')

