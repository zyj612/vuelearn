import Vue from 'vue'
import App from './App'
//如果导入的是router文件夹，他会自动去找该目录下的额index的文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
