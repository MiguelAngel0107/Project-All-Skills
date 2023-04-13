import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { Picker } from 'emoji-mart';
//import 'emoji-mart/css/emoji-mart.css';

const MessageInput = (props) => {

  return (
    <div className="bg-gray-900 p-4 flex items-center bottom-0">
      <form className="flex w-full" onSubmit={props.handleFormSubmit}>
        <button
          type="button"
          className="mr-2 focus:outline-none"
          onClick={props.toggleEmojiPicker}
        >
          <FontAwesomeIcon icon={faSmile} />
        </button>
        {props.showEmojiPicker && (
          <Picker
            title="Elige un emoji"
            emoji="point_up"
            onSelect={props.handleEmojiSelect}
            style={{ position: 'absolute', bottom: '64px', right: '4px' }}
          />
        )}
        <input
          type="text"
          value={props.text}
          onChange={props.handleInputChange}
          className="flex-1 rounded-full border-2 border-indigo-600 px-4 py-2 focus:outline-none focus:border-indigo-500"
          placeholder="Escribe un mensaje"
        />
        <button
          type="submit"
          className="ml-2 bg-indigo-600 text-white rounded-full px-4 py-2 focus:outline-none hover:bg-indigo-500"
          disabled={!props.text.trim()}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default MessageInput;