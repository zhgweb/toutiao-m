import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 使用rem插件
import 'amfe-flexible'
// 使用vant组件库
import Vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
// 覆盖 vant 的样式
import '@/styles/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
