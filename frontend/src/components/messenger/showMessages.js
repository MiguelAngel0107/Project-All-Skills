import React, { use, useEffect } from "react";
import MessageInput from "./showMessages/messageInput";
import { useState } from "react";
import createWebSocket from "@/components/messenger/chatSocket";

import { connect } from "react-redux";
import { get_messages } from "@/redux/actions/message";

const MessageList = ({ name, get_messages, ListMessages }) => {
  const [chatSocket, setChatSocket] = useState(null);
  const [listMessage, setListMessage] = useState([]);

  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    setChatSocket(createWebSocket("roomName"));
    get_messages("roomName");
  }, []);

  if (chatSocket != null) {
    chatSocket.onmessage = function (e) {
      console.log("onMessage");
    };
  }

  if (chatSocket != null) {
    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      setListMessage((prevState) => prevState.concat(data));
      console.log(data);
    };
  }

  const handleInputChange = (event) => {
    console.log("Paso el InputChange");
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
    chatSocket.send(
      JSON.stringify({
        message: text,
        username: name,
        room: "roomName",
      })
    );
    setText("");
  };

  const messages = [
    {
      id: 1,
      content: "Hola, ¿cómo estás?",
      sender: "Juan Perez",
      timestamp: "Hace 5 minutos",
    },
   
  ];

  let MessagesFilters;
  listMessage ? (MessagesFilters = listMessage) : (MessagesFilters = messages);
  let MessagesBackennd;
  ListMessages
    ? (MessagesBackennd = ListMessages)
    : (MessagesBackennd = messages);

  return (
    <div className="flex-1 p-4 bg-gray-900 text-white">
      <h2 className="text-lg font-medium mb-4">Mensajes</h2>
      <ul className="space-y-4">
        {MessagesBackennd.map((message, index) => (
          <li
            key={index}
            className={`flex flex-col ${
              message.username === name ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                message.username === name
                  ? "bg-indigo-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-900 rounded-bl-none"
              }`}
            >
              <p className="text-sm">{message.message}</p>
            </div>
            <span className="text-xs text-gray-400 mt-1">Undefined</span>
          </li>
        ))}
        {MessagesFilters.map((message, index) => (
          <li
            key={index}
            className={`flex flex-col ${
              message.username === name ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                message.username === name
                  ? "bg-indigo-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-900 rounded-bl-none"
              }`}
            >
              <p className="text-sm">{message.message}</p>
            </div>
            <span className="text-xs text-gray-400 mt-1">Undefined</span>
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

const mapStateToProps = (state) => ({
  name: state.User.fullName,
  ListMessages: state.Chat.listMessages,
});

export default connect(mapStateToProps, { get_messages })(MessageList);
