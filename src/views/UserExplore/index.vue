<template>
  <div class="Contaienr">
    <div class="user">
      <div class="user-left">
        <h1>早上好,{{ user_store.user?.name }}</h1>
        <div class="info">
          <img
            src="https://img.js.design/assets/img/6284bbb5cfbf108657fa51cb.png"
            alt=""
          />
          <div class="intro">完成你的个人资料</div>
          <div class="edit">立即编辑</div>
        </div>
      </div>
      <div class="user-right">
        <div class="my-production">
          <div>您的作品</div>
          <div class="count">12</div>
          <div class="ETH">
            <el-icon :size="25" color="'#b87fd9'">
              <CpIcon :name="'production'"></CpIcon>
            </el-icon>
            ETH
          </div>
        </div>
        <div class="line"></div>
        <div class="pay">
          <el-icon size="20" color="#5ae6bc"><CirclePlus /></el-icon>
          <div>充值余额 &gt;</div>
        </div>
      </div>
    </div>

    <div class="stack">
      <div>技术栈</div>
      <div class="all">
        全部项目
        <div>+30</div>
      </div>
    </div>

    <div class="data">
      <div class="bg" v-for="(item, index) in list" :key="index">
        <box :item="item"></box>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { type_list } from '@/types/UserExplore'
import { useUserStore } from '@/stores/index'
import { onMounted, ref } from 'vue'
import { getData } from '@/api/UserExplore'
const user_store = useUserStore()
const list = ref<type_list[]>()
onMounted(async () => {
  const { data } = await getData({
    token: user_store.user?.token
  })
  console.log('data:', data)

  list.value = data.list
  console.log(list.value)
})
</script>

<style lang="scss" scoped>
.Contaienr {
  .user {
    display: flex;
    height: 114px;
    justify-content: space-between;
    .user-left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h1 {
        font-size: 32px;
        font-weight: 700;
        color: rgba(255, 255, 255, 1);
      }
      .info {
        display: flex;
        align-items: center;
        font-size: 14px;
        img {
          width: 29.17px;
          height: 29.17px;
          border: 1px solid #b47dd4;
          border-radius: 50%;
        }
        .intro {
          line-height: 19.21px;
          margin: 0 15px;
          color: rgba(255, 255, 255, 1);
        }
        .edit {
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 21.95px;
          color: rgba(184, 127, 217, 1);
          cursor: context-menu;
        }
      }
    }

    .user-right {
      width: 595px;
      height: 114px;
      border-radius: 15px;
      background: rgba(55, 57, 76, 1);
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 30px 10px 30px;
      .my-production {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: rgba(221, 221, 221, 1);
        cursor: context-menu;
        .count {
          font-size: 32px;
          font-weight: 600;
          letter-spacing: 0px;
          line-height: 38.73px;
          color: rgba(255, 255, 255, 1);
        }
        .ETH {
          display: flex;
          align-items: center;
          .cp-icon {
            color: #b87fd9;
          }
        }
      }
      .line {
        width: 169.26px;
        height: 70.97px;
        background: rgba(196, 196, 196, 1);
        border: 2px solid rgba(184, 127, 217, 1);
      }
      .pay {
        width: 146px;
        height: 80px;
        border-radius: 100px;
        padding: 22px 0;
        border: 1px solid rgba(238, 238, 238, 1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        cursor: context-menu;
      }
    }
  }
  .stack {
    display: flex;
    justify-content: space-between;
    height: 44px;
    font-size: 32px;
    font-weight: 700;
    margin: 40px 0 25px;
    color: rgba(255, 255, 255, 1);
    .all {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 21.95px;
      color: rgba(184, 127, 217, 1);

      div {
        width: 52px;
        height: 29px;
        border-radius: 100px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(184, 127, 217, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
      }
    }
  }
  .data {
    display: flex;
    height: 350px;
    justify-content: space-between;
    .bg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 350px;
      height: 350px;
      border-radius: 20px;
      background: rgba(55, 57, 76, 1);
    }
  }
}
</style>
