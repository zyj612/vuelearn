import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //render: h => h(App)
  //1.普通用法
  //render: h => h('h2',{class:'box'},['Hello World',h('button',['按钮'])])
  //2.传入组件
  render: h => h('h2',{class:'box'},['Hello World',h('button',['按钮'])])
})
