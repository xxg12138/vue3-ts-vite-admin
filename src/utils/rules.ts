export const rules_email = () => {
  return (rule: any, value: any, callback: any) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(value)) return callback(new Error('邮箱格式有误'))
    callback()
  }
}

// 长度在 8 到 16 个字符之间
// 必须包含至少一个大写字母和一个小写字母
// 必须包含至少一个数字
// 可以包含特殊字符，如 !@#$%^&*
export const rules_password = () => {
  return (rule: any, value: any, callback: any) => {
    const emailRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,16}$/
    if (!emailRegex.test(value))
      return callback(new Error('密码长度8-16个字符，含有大小写字母和数字'))
    callback()
  }
}
