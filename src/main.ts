import { createApp } from 'vue'
import pinia from '@/stores/index'
import '@/styles/common.scss'
import '@/styles/base.scss'

import '@/mock/login'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import '@/permission'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'virtual:svg-icons-register'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)

app.mount('#app')
