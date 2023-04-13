const createWebSocket = (text) => {
  const ws = new WebSocket("ws://localhost:8000/ws/" + text + "/");
  ws.onopen = () => {
    console.log("WebSocket conectado");
  };
  ws.onclose = () => {
    console.log("WebSocket desconectado");
  };
  return ws;
};

export default createWebSocket;
