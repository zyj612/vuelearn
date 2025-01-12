// websocket.js

class WebSocketService {
    constructor() {
      this.socket = null;
      this.messageQueue = [];
      this.isConnected = false;
    }
  
    connect(url) {
      this.socket = new WebSocket(url);
  
      this.socket.onopen = () => {
        console.log('Connected to WebSocket server');
        this.isConnected = true;
        this.messageQueue.forEach((message) => this.socket.send(message));
        this.messageQueue = [];
      };
  
      this.socket.onmessage = (event) => {
        console.log('Received message from server:', event.data);
      };
  
      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
  
      this.socket.onclose = () => {
        console.log('WebSocket connection closed');
        this.isConnected = false;
      };
    }
  
    sendMessage(message) {
      if (this.isConnected) {
        this.socket.send(message);
      } else {
        this.messageQueue.push(message);
      }
    }
  }
  
  const webSocketService = new WebSocketService();
  export default webSocketService;
  