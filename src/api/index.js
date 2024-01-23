/*
 * @Author: liliujun liliujun@buptinfo.com
 * @Date: 2024-01-23 11:32:25
 * @LastEditors: liliujun liliujun@buptinfo.com
 * @LastEditTime: 2024-01-23 11:35:43
 * @FilePath: /vite-basics-vue/src/api/index.js
 * @Description: api
 */
import http from '../http'

const api = () => {
  return {
    onClick: () => http.get('add')
  }
}

export default api()
