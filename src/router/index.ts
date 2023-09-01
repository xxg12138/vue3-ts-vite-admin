import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  // createWebHashHistory()
  routes
})

export default router
