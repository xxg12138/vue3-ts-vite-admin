<template>
  <div class="header" :class="store.light_flag ? 'white_bg' : 'black_bg'">
    <el-icon
      v-if="!store.flag"
      size="35"
      :class="store.light_flag ? 'element_font' : 'white_font'"
      @click="store.ChangeFlag"
      ><Fold
    /></el-icon>
    <el-icon
      v-if="store.flag"
      size="35"
      :class="store.light_flag ? 'element_font' : 'white_font'"
      @click="store.ChangeFlag"
      ><Expand
    /></el-icon>
    <!-- 搜索 -->
    <div class="search">
      <el-input placeholder="搜索关键词" v-model="text" suffix-icon="el-icon-search">
        <template #prefix>
          <el-icon size="16" style="vertical-align: middle">
            <Search />
          </el-icon>
        </template>
      </el-input>
    </div>

    <div class="light">
      <el-switch
        :class="store.light_flag ? 'open' : ''"
        v-model="change"
        inline-prompt
        active-text="关灯"
        inactive-text="开灯"
        border-color="none"
        @change="changeFn"
      />
    </div>
    <!-- 个人信息 -->
    <div
      class="info"
      :class="[
        store.light_flag ? 'element' : 'black_bg',
        store.light_flag ? 'white_font' : 'black_font'
      ]"
    >
      <div class="left">
        <div class="avatar">
          <img src="https://img.js.design/assets/img/6284bbb5cfbf108657fa51cb.png" alt="" />
        </div>
        <div class="name">
          <div>{{ user_sotre.user?.name }}</div>
          <div>{{ user_sotre.user?.card }} Pro+</div>
        </div>
      </div>
      <div class="right">
        <div>
          <el-icon :size="20">
            <CpIcon :name="'bells'"></CpIcon>
          </el-icon>
        </div>
        <div>
          <img src="@/assets/icon/Group.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommon } from '@/stores/index'
import { onMounted, ref, watch } from 'vue'
import { useUserStore } from '@/stores/index'

const user_sotre = useUserStore()

const store = useCommon()
const text = ref<string>('')
const change = ref<boolean>(false)
const changeFn = () => {
  store.Changelight_flag()
}
let color = ref<String>()
onMounted(() => {
  color = ref<string>(getComputedStyle(document.body).getPropertyValue('--open-bg').trim())
})
watch(
  () => store.light_flag,
  () => {
    document.documentElement.style.setProperty(
      '--el-fill-color-blank',
      store.light_flag ? (color.value as string) : ' #343646'
    )
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
@media (max-width: 1028px) {
  .header {
    justify-content: space-between !important;
  }
  .search {
    display: none;
  }
}
@media (max-width: 1200px) {
  .light {
    display: none;
  }
  .search {
    // display: none;
  }
}
@media (min-width: 1201px) {
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 98px;
  z-index: 999;
  border-radius: 5px;

  .info {
    width: 289px;
    height: 65px;
    border-radius: 15px;
    background: rgba(55, 57, 76, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 11px;
    margin-right: 50px;
    .left {
      display: flex;
      width: 189px;
      height: 45px;
      .avatar {
        img {
          width: 38px;
          height: 38px;
        }
      }
    }
    .right {
      flex: 1;
      display: flex;
      padding-left: 19px;
      justify-content: space-between;
      img {
        width: 17.5px;
        height: 10.47px;
      }
    }
    .name {
      display: flex;
      flex-direction: column;
      :first-child {
        font-weight: 700;
        line-height: 24.7px;
      }
      :nth-child(2) {
        font-size: 12px;
      }
    }
  }

  .search {
    margin-left: 107px;
    :deep(.el-input__wrapper) {
      width: 360px;
      height: 40px;
      border-radius: 12px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 8px 8px 8px 8px;
      box-shadow: none;
      .el-input__inner {
        margin-left: 16px;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.15px;
        line-height: 24px;
        color: rgba(88, 89, 107, 1);
        text-align: left;
      }
    }
  }
  .light {
    :deep(.el-switch__core) {
      width: 168px;
      height: 40px;
      border-radius: 100px;
      background: rgba(52, 54, 70, 1);
      padding: 5px 5px 5px 5px;
      .is-text {
        font-size: 15px;
        font-weight: 700;
      }
      .el-switch__action {
        width: 74px;
        height: 34px;
        opacity: 1;
        border-radius: 100px;
        border: 1px solid undefined;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 6px 25px 6px 25px;
      }
    }
    :deep(.el-switch.is-checked .el-switch__core .el-switch__action) {
      left: calc(94px) !important;
      color: var(--el-switch-on-color);
    }
  }
}
</style>
