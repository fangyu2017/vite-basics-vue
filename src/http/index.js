import axios from 'axios'

const http = axios.create({
  baseURL: 'https://localhost:8080/api',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

// 请求拦截器
http.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default http
