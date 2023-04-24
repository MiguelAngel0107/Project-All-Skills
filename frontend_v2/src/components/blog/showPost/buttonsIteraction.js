import { useState, Fragment } from "react";
import DialogComment from "../formPost/dialogComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export default function ButtonsIteraction(props) {
  return (
    <div class="flex space-x-2">
      <div className="mt-2 px-2">
        <button
          type="button"
          onClick={(e) => props.add_like_or_dislike(Number(props.idPost), "like")}
          className="flex space-x-2 justify-center items-center hover:text-blue-800 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
        >
          <FontAwesomeIcon icon={faThumbsUp} />
          <p className="text-sm font-semibold">Like</p>
        </button>
      </div>
      <div className="mt-2 px-2">
        <button
          type="button"
          onClick={(e) => props.add_like_or_dislike(Number(props.idPost), "dislike")}
          className="flex space-x-2 justify-center items-center hover:text-red-800  text-xl py-2 rounded-lg cursor-pointer text-gray-500 "
        >
          <FontAwesomeIcon icon={faThumbsDown} />
          <p className="text-sm font-semibold">Dislike</p>
        </button>
      </div>
      <div
        onClick={props.openModal}
        className="w-1/3 flex space-x-2 justify-center items-center hover:text-black text-xl  rounded-lg cursor-pointer text-gray-500 "
      >
        <FontAwesomeIcon icon={faComment} />
        <span className="text-sm font-semibold">Comment</span>
      </div>
      <DialogComment isOpen={props.isOpen} closeModal={props.closeModal} />
    </div>
  );
}
