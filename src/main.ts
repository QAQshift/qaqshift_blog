import { createApp } from 'vue'
import router from './router'
import pinia from './store'
import './style.css'
// 找不到 './App.vue' 需要在src下面创建 shims-vue.d.ts  告诉 TypeScript 所有 .vue 文件都是 Vue 组件 并定义其类型
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(pinia).use(router).use(ElementPlus).mount('#app')
