import {createApp} from "vue"

import App from "./App.vue"
import router from './router'
import "./style.css"

const app = createApp(App)
//使用路由器
app.use(router)
//挂载根组件到app容器中
app.mount('#app')