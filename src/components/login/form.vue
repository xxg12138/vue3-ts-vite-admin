<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      label-position="left"
      status-icon
      :rules="rules"
      class="demo-ruleForm"
      :hide-required-asterisk="true"
    >
      <el-form-item label="Email" prop="email">
        <el-input
          v-model.trim="ruleForm.email"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input
          v-model.trim="ruleForm.password"
          type="password"
          autocomplete="off"
          :show-password="true"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="login(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { rules_email, rules_password } from '@/utils/rules'
import { ref } from 'vue'
import { login_api } from '@/api/login'
import type { register } from '@/types/login.d.ts'
import type { FormInstance } from 'element-plus'
import { useUserStore } from '@/stores/index'
import { useRouter } from 'vue-router'
const store = useUserStore()
const roeuter = useRouter()
const ruleForm = ref<register>({
  email: '1162149834@qq.com',
  password: '123456aB'
})

// 效验规则
const rules = ref({
  email: [
    { required: true, trigger: 'blur', message: '邮箱不能为空' },
    {
      validator: rules_email(),
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, trigger: 'blur', message: '密码不能为空' },
    {
      validator: rules_password(),
      trigger: 'blur'
    }
  ]
})
const ruleFormRef = ref<FormInstance>()
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (volid) => {
    if (!volid) return
    try {
      const { data } = await login_api(ruleForm.value)
      store.setUser(data)
      roeuter.push('/')
    } catch (err) {
      console.log(err)
    }
  })
}
</script>

<style lang="scss" scoped>
.el-form-item {
  display: flex;
  flex-direction: column;
  :deep(.el-form-item__label) {
    font-size: 15px;
    line-height: 17.16px;
    color: rgba(50, 56, 81, 1);
  }
  :deep(.el-form-item__content) {
    display: flex;
    flex-direction: column;
    width: 100%;
    .el-button {
      margin-top: 20px;
      width: 100%;
      margin-left: 0;
      border-radius: 6px;
      color: #fff;
      font-size: 15px;
      background: rgba(73, 102, 223, 1);
      border: 0px;
    }
  }
}
</style>
