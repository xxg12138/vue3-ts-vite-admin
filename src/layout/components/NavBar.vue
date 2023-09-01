<template>
  <div>
    <el-menu
      :class="store.light_flag ? 'white_bg' : 'black_bg'"
      text-color="#fff"
      class="el-menu-vertical-demo"
      background-color="#343646"
      :collapse="store.flag"
      router="path"
    >
      <div class="Logo"><CpIcon :name="'Logo'"></CpIcon></div>

      <NavItem
        v-for="(item, index) in list.slice(0, 2)"
        :key="index"
        :meta="item.meta as metas"
        :link="item.path"
        :active="active"
        :name="item.meta?.name"
        @click="active = item.meta?.name"
      ></NavItem>

      <el-menu-item class="info">
        <template #title>个人资料</template>
      </el-menu-item>

      <NavItem
        v-for="(item, index) in list.slice(2, -1)"
        :key="index"
        :meta="item.meta as metas"
        :link="item.path"
        :active="active"
        :name="item.meta?.name"
        @click="active = item.meta?.name"
      ></NavItem>

      <div class="info">
        <NavItem
          :meta="list.slice(-1)[0].meta as metas"
          :link="list.slice(-1)[0].path"
          :active="active"
          :name="list.slice(-1)[0].meta?.name"
          @click="active = list.slice(-1)[0].meta?.name"
        ></NavItem>
        <!-- 退出 -->
        <el-menu-item @click="exitFn">
          <el-icon :size="20">
            <CpIcon :name="'exit'"></CpIcon>
          </el-icon>
          <template #title>退出账号</template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import type { metas } from '@/types/UserExplore'
import { ElMessageBox } from 'element-plus'
import NavItem from './Nav/NavItem.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCommon } from '@/stores/index'
import { useUserStore } from '@/stores/index'
import { useRouter } from 'vue-router'
const store = useCommon()
const Route = useRoute()
const list = Route.matched[0].children

const active = ref(list[0].meta?.name)
console.log(list)

const User_store = useUserStore()
const router = useRouter()
// 退出
const exitFn = () => {
  ElMessageBox.confirm('您确定要退出吗？', {
    confirmButtonText: '是',
    cancelButtonText: '否',
    type: 'warning',
    buttonSize: 'large',
    confirmButtonClass: 'btnFalses',
    customClass: 'box'
  }).then(() => {
    localStorage.removeItem('lyk-user')
    User_store.removeUser()
    router.push('/login')
  })
}
</script>

<style lang="scss" scoped>
.info {
  margin-top: 100px;
}
.el-menu {
  border-right: none;
}
:deep(.el-menu-item) {
  width: 200px;
  font-size: 16px;
  z-index: 999;
  margin-left: 10px;
  [class^='el-icon'] {
    margin-right: 20px;
  }
}
.Logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
  svg {
    width: 70px;
    height: 66.21px;
  }
}
</style>
