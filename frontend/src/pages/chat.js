import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import APP_URL_SERVIDOR from "@/globals";

export default function Chat() {
  const [messages, setMessages] = useState({});
  const [message, setMessage] = useState("");
  const socketRef = useRef();
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageSend = () => {
    socketRef.current.emit("chat_message", {
      message,
    });
    setMessage("");
  };
  useEffect(() => {
    socketRef.current = io(APP_URL_SERVIDOR, {
      auth: {
        bearer: "your_jwt_token_here",
      },
    });

    socketRef.current.on("connect", () => {
      console.log("connected to chat server");
    });

    socketRef.current.on("chat_message", (data) => {
      setMessages((prevState) => {
        return { ...prevState, [data.id]: data };
      });
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  return (
    <div>
      <ul>
        {Object.values(messages).map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <input type="text" value={message} onChange={handleMessageChange} />
      <button onClick={handleMessageSend}>Send</button>
    </div>
  );
}
