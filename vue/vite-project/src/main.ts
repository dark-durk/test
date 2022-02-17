import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import ELbutton from '@/components/button'

const app = createApp(App)
app.use(ELbutton)
app.use(store).use(router).mount('#app')

// 注册一个全局自定义指令 `v-focus`
app.directive('focus', {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el) {
    // 聚焦元素
    el.focus()
  }
})
