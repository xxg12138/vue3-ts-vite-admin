<template>
  <div class="nav">
    <RouterLink :to="'/' + link">
      <el-menu-item>
        <el-icon :size="20">
          <CpIcon :name="meta.name"></CpIcon>
        </el-icon>
        <template #title> {{ meta.title }}</template>
      </el-menu-item>
    </RouterLink>

    <div
      v-if="name === active"
      class="active"
      :class="{ lessen: store.flag, big_active: meta.info }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useCommon } from '@/stores/index'
const store = useCommon()
defineProps<{
  meta: {
    title: string
    name: string
    info?: boolean
  }
  active: string | unknown
  name: String | unknown
  link?: string
}>()
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  animation: all 0.3s;
  img {
    width: 25px;
    height: 25px;
  }
  .active {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    height: 40px;
    border-radius: 0 50px 50px 0;
    animation: big_expandWidth50 0.3s forwards;
  }
  .big_active {
    animation: big_expandWidth122 0.3s forwards;
  }
  .lessen {
    animation: expandWidth 0.3s forwards;
  }

  @keyframes expandWidth {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes big_expandWidth122 {
    from {
      width: 0;
    }
    to {
      width: 160px;
    }
  }
  @keyframes big_expandWidth50 {
    from {
      width: 0;
    }
    to {
      width: 122px;
    }
  }
}
</style>
