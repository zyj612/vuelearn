<template>
  <div>
    <h1>WebSocket Client</h1>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script>
export default {
  name: 'WebSocketComponent',
  methods: {
    sendMessage() {
      this.$socket.sendMessage('Hello from Vue 3 Component!');
    }
  }
}
</script>