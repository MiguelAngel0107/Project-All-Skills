const createWebSocket = (roomName) => {
  const ws = new WebSocket("ws://localhost:8000/ws/" + roomName + "/");
  ws.onopen = () => {
    console.log("WebSocket conectado");
  };
  ws.onclose = () => {
    console.log("WebSocket desconectado");
  };
  return ws;
};

export default createWebSocket;
