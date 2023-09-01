import request from '@/utils/request'
import type { register, user } from '@/types/login'

export const login_api = (data: register) => {
  return request.post<user>('/register', {
    data
  })
}
