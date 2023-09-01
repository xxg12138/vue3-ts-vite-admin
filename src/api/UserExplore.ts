import request from '@/utils/request'
import type { type_list } from '@/types/UserExplore'

export const getData = (params: { token: string | undefined }) => {
  return request.get<type_list[]>('/UserExplore', { params })
}
