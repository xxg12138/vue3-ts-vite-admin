import request from '@/utils/request'

export const getData = (params: { token: string | undefined }) => {
  return request.get<any>('/UserExplore', { params })
}
