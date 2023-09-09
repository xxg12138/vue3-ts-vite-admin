<template>
  <div class="container" :style="{ background: store.light_flag ? '#f4f4f4' : '#1e1e2c' }">
    <div class="left" :class="store.light_flag ? 'white_bg' : 'black_bg'">
      <NavBar></NavBar>
    </div>
    <div class="right">
      <AppHeader></AppHeader>
      <AppMain class="main"></AppMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar.vue'
import { useCommon } from '@/stores/index'
const store = useCommon()
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  // background-color: #1e1e2c;
  .left {
    height: 100%;
    background-color: #343646;
    border-right: 1px;
  }
  .right {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 4px;
    z-index: 999;
    height: 100%;
    box-sizing: border-box !important;

    .main {
      height: 100%;
    }
  }
}
</style>
