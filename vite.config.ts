import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 设置别名 1.安装@types/node 2.vite.config.ts添加resolve 3.tsconfig.json添加路径映射
  // 用于开发和打包阶段
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
