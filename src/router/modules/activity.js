/*
 * @Author: liliujun liliujun@buptinfo.com
 * @Date: 2024-01-25 14:25:35
 * @LastEditors: liliujun liliujun@buptinfo.com
 * @LastEditTime: 2024-01-25 14:36:26
 * @FilePath: /vite-basics-vue/src/router/modules/activity.js
 * @Description:
 */
export default {
  path: '/activity',
  children: [
    {
      path: 'happyNewYear',
      name: 'HappyNewYear',
      component: () => import('@/views/activity/HappyNewYear/index.vue')
    }
  ]
}
