import { createPinia } from 'pinia'
import presis from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(presis)
export default pinia

export * from './modules/user'

export * from './modules/common'
