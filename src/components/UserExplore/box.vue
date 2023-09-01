<template>
  <div class="content" :style="`background: url(${item.imgUrl} `">
    <div class="info">
      <div class="title">{{ item.text }}</div>
      <div class="user-info">
        <el-avatar :size="24" :src="item.avatar" />
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { type_list } from '@/types/UserExplore'
defineProps<{
  item: type_list
}>()
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: end;
  justify-content: center;
  width: 328.72px;
  height: 328.72px;
  opacity: 1;
  border-radius: 20px;
  // background: url(https://img.js.design/assets/img/62845308aba4e68498f07707.jpg)
  //   left top;
  background-size: contain;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 315px;
    height: 93px;
    border-radius: 20px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    backdrop-filter: blur(40px);
    padding: 16px 10px 16px 10px;
    .user-info {
      display: flex;
      align-items: center;
      div {
        margin-left: 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: rgba(221, 221, 221, 1);
      }
    }
  }
}
</style>
