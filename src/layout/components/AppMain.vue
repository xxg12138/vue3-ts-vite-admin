<template>
  <div class="main" :class="store.light_flag ? 'white_bg' : 'black_bg'">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <RouterView></RouterView>
      </keep-alive>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useCommon } from '@/stores/index'
const store = useCommon()
</script>

<style lang="scss" scoped>
.main {
  margin-top: 4px;
  height: 100%;
  background: rgba(36, 38, 54, 1);
  // padding: 21px 62px;
  border-radius: 5px;
  overflow: hidden;
}
</style>
