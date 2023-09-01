import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { user } from '@/types/login'

export const useUserStore = defineStore(
  'lyk-user',
  () => {
    const user = ref<user | null>()

    const setUser = (data: user) => {
      user.value = data
    }
    const removeUser = () => {
      user.value = null
    }

    return { user, setUser, removeUser }
  },
  {
    persist: true
  }
)
