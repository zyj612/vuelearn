<template>
  <div id="app">
    <WebSocketComponent />
  </div>
</template>

<script>
import WebSocketComponent from './components/WebSocketComponent.vue';

export default {
  name: 'App',
  components: {
    WebSocketComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
