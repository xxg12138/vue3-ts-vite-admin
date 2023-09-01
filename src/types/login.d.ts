export type register = {
  email: string
  password: string
}

export type register_data = {
  token: string
}

// 注册返回接口
export type api_register = {
  data: register_data
}

// 用户信息
export type user = {
  name: string
  imgUrl: string
  token: string
  introduce: string
  card: string
  // 作品
  count: number
}
