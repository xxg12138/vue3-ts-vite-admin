import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 5000
})

request.interceptors.request.use((res) => {
  return res
})

request.interceptors.response.use((res) => {
  return res.data
})

export default request
