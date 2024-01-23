import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

export default defineConfig({

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
        filepath: './eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
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
  }

})
