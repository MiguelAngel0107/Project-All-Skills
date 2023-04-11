import { useEffect, useState } from "react";
import Layout from "@/layouts/layout";
import createWebSocket from "@/components/messenger/chatSocket";

export default function Messenger() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [chatSocket, setChatSocket] = useState(null);

  useEffect(() => {
    const ws = createWebSocket();
    setChatSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (!chatSocket) {
      return;
    }
    chatSocket.onmessage = (message) => {
      const dataFromserver = JSON.parse(message.data);
      if (dataFromserver) {
        setMessages([
          ...messages,
          {
            msg: dataFromserver.message,
            name: dataFromserver.name,
          },
        ]);
      }
    };
  }, [chatSocket, messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      type: "message",
      message: message,
      name: "Me",
    };
    console.log(newMessage);
    setMessages([newMessage, ...messages]);
    chatSocket.send(newMessage.message);
    setMessage("");
  };

  return (
    <Layout>
      <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
          <h1 className="text-2xl font-bold my-2">Chat React</h1>
          <input
            name="message"
            type="text"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 border-zinc-500 p-2 w-full text-black"
            value={message}
            autoFocus
          />

          <ul className="h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <li
                key={index}
                className={`my-2 p-2 table text-sm rounded-md ${
                  message.name === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
                }`}
              >
                <b>{message.name}</b>:{message.message}
              </li>
            ))}
          </ul>
        </form>
      </div>
    </Layout>
  );
}
