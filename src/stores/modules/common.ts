import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCommon = defineStore('common', () => {
  const flag = ref<boolean>(false)
  const light_flag = ref<boolean>(false)
  const ChangeFlag = () => {
    flag.value = !flag.value
  }

  const Changelight_flag = () => {
    light_flag.value = !light_flag.value
  }
  return { flag, ChangeFlag, light_flag, Changelight_flag }
})
