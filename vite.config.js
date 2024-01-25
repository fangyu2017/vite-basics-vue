/*
 * @Author: liliujun liliujun@buptinfo.com
 * @Date: 2024-01-23 10:46:51
 * @LastEditors: liliujun liliujun@buptinfo.com
 * @LastEditTime: 2024-01-25 14:40:52
 * @FilePath: /vite-basics-vue/vite.config.js
 * @Description:
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const { VITE_APP_MODE } = env
  return {
    base: VITE_APP_MODE === 'dev' ? './' : './',
    publicDir: 'static',
    plugins: [
      vue(),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router'
        ],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import \'src/assets/styles/base.scss\';'
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'Chrome > 31',
              'ff > 31',
              'ie >= 11',
              '> 1%'
            ],
            grid: true
          })
        ]
      }
    },
    build: {
      outDir: 'dist', // `${VITE_APP_MODE}`, // 指定输出路径（相对于 项目根目录).
      assetsDir: 'static' // 指定生成静态资源的存放路径（相对于 build.outDir）
    }
  }
})
