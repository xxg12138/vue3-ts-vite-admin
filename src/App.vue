<template>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { useCommon } from '@/stores/index'
const store = useCommon()
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>
