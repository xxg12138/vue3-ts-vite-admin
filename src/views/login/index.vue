<template>
  <div class="container">
    <div class="login">
      <div class="bg"></div>
      <div class="login-form">
        <div class="form">
          <h2>Welcome to ASS System</h2>
          <div class="change">Login your account</div>
          <form_Data></form_Data>
          <div class="info">
            <div>邮箱：1162149834@qq.com</div>
            <div>密码：123456aB</div>
          </div>
        </div>
      </div>
    </div>
    <div class="round"></div>
  </div>
</template>

<script setup lang="ts">
import form_Data from '@/components/login/form.vue'
</script>

<style lang="scss" scoped>
.container {
  // background-color: #4b8aff;
  background-color: #242636;
  .login {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-25%, -50%);
    display: flex;
    width: 800px;
    height: 400px;
    border-radius: 50px;
    overflow: hidden;
    z-index: 999;
    .bg {
      flex: 1;
      background-image: url('@/assets/login.png');
      // background-position: top center;
      background-size: cover;
    }
    .login-form {
      flex: 1;
      background-color: #fff;
      .form {
        padding: 40px;
        background-color: #b87fd9;
        .change {
          padding: 10px 0 20px;
          font-size: 12px;
          line-height: 14.13px;
          color: rgba(176, 183, 208, 1);
        }
        .info {
          display: flex;
          flex-direction: column;
          font-size: 12px;
          color: #ccc;
          line-height: 25px;
        }
      }
    }
  }
  .round {
    position: fixed;
    right: -200px;
    top: -300px;
    width: 900px;
    height: 900px;
    // background-color: #fff;
    background-color: #b87fd9;
    opacity: 0.2;
    border-radius: 50%;
  }
}
</style>
