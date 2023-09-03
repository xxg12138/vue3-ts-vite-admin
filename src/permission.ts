import router from './router'
import { useUserStore } from '@/stores/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whilteList = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (useUserStore().user?.token) {
    if (whilteList.includes(to.path)) {
      next('/')
    } else {
      next()
    }
  } else {
    if (whilteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach((to, from, next) => {
  NProgress.done()
})
