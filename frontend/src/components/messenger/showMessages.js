import React, { useEffect } from "react";
import MessageInput from "./showMessages/messageInput";
import { useState } from "react";
import createWebSocket from "@/components/messenger/chatSocket";

const MessageList = () => {
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    const chatSocket = createWebSocket("testroom");

    chatSocket.onmessage = function (e) {
      console.log("onMessage");
    };
    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);

      if (data.message) {
        document.querySelector("#chat-messages").innerHTML +=
          "" + data.username + ": " + data.message + "";
      } else {
        alert("The message was empty!");
      }
    };
  }, []);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleEmojiSelect = (emoji) => {
    setText(text + emoji.native);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Message sent: ${text}`);
    setText("");
  };

  const messages = [
    {
      id: 1,
      content: "Hola, ¿cómo estás?",
      sender: "Juan Perez",
      timestamp: "Hace 5 minutos",
    },
    {
      id: 2,
      content: "Estoy bien, gracias. ¿Y tú?",
      sender: "Maria Rodriguez",
      timestamp: "Hace 3 minutos",
    },
    {
      id: 3,
      content: "Todo bien también, gracias",
      sender: "Juan Perez",
      timestamp: "Hace 2 minutos",
    },
    {
      id: 4,
      content: "Todo bien también, gracias",
      sender: "Juan Perez",
      timestamp: "Hace 2 minutos",
    },
    {
      id: 5,
      content: "Todo bien también, gracias",
      sender: "Maria Rodriguez",
      timestamp: "Hace 2 minutos",
    },
    {
      id: 6,
      content: "Todo bien también, gracias",
      sender: "Juan Perez",
      timestamp: "Hace 2 minutos",
    },
  ];

  return (
    <div className="flex-1 p-4 bg-gray-900 text-white">
      <h2 className="text-lg font-medium mb-4">Mensajes</h2>
      <ul className="space-y-4">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`flex flex-col ${
              message.sender === "Juan Perez" ? "items-start" : "items-end"
            }`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                message.sender === "Juan Perez"
                  ? "bg-indigo-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-900 rounded-bl-none"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
            <span className="text-xs text-gray-400 mt-1">
              {message.timestamp}
            </span>
          </li>
        ))}
      </ul>
      <MessageInput
        text={text}
        showEmojiPicker={showEmojiPicker}
        handleInputChange={handleInputChange}
        handleEmojiSelect={handleEmojiSelect}
        toggleEmojiPicker={toggleEmojiPicker}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default MessageList;
