import 'babel-polyfill'  // 使ES6语法以ES5语法解析 方便浏览器识别
import Vue from 'vue'
import App from './App'
import router from './router'   // router路由
import fastclick from 'fastclick'  // 去除默认的点击3秒延迟
import VueLazyload from 'vue-lazyload'  // 懒加载
import store from './store'  // store仓库

import 'common/stylus/index.styl'  // 引入的styl 样式

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'  // 可以在移动设备上console.log()

fastclick.attach(document.body)  // 在body中使用（去除默认的点击3秒延迟）

Vue.use(VueLazyload, { // 懒加载 使用 以及懒加载使用的图片
  loading: require('common/image/QQmusic.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
