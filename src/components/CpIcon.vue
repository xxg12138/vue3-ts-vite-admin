<script setup lang="ts">
import { useCommon } from '@/stores/index'
const store = useCommon()
// 提供name属性即可
defineProps<{
  name: string
}>()
</script>

<template>
  <svg
    aria-hidden="true"
    class="cp-icon"
    :style="{ color: store.light_flag ? '#000' : '#fff' }"
  >
    <use :href="`#icon-svg-${name}`" />
  </svg>
</template>

<style lang="scss" scoped>
.cp-icon {
  // 和字体一样大
  width: 1em;
  height: 1em;
  // color: #fff;
}
</style>
