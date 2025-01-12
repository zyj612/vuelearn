import { createApp } from 'vue';
import App from './App.vue';
import webSocketService from './websocket';

const app = createApp(App);

// 连接 WebSocket 服务器
webSocketService.connect('ws://localhost:9090');

app.config.globalProperties.$socket = webSocketService;

app.mount('#app');
