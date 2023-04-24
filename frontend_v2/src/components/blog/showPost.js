import { Menu, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import APP_URL_SERVIDOR from "@/globals";

import HeaderPost from "./showPost/headerPost";
import ButtonsIteraction from "./showPost/buttonsIteraction";

export default function ShowPost(props) {
  const [isOpen, setIsOpen] = useState(false);
  const Item = props.post;

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div class="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
        <HeaderPost
          author={String(Item.author)}
          date={String(Item.created_on)}
          photo={String(Item.photo_author)}
          author_id={Item.author_id}
          idUser={props.idUser}
          idPost={Item.id}
        />

        <div class="text-justify px-4 py-2">{String(Item.body)}</div>

        <div class="py-2">
          <a href="/social/post/2/">
            <img
              src={`${APP_URL_SERVIDOR}${String(Item.image_urls[0])}`}
              alt="Post image"
            />
          </a>
        </div>

        <div className="px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <span className="text-xs ml-2 text-gray-500 dark:text-dark-txt">
                {Item.likes} Likes
              </span>
              <div className="rounded-full grid place-items-center text-xl -ml-1 text-blue-500">
                <i className="bx bxs-like"></i>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xs ml-2 text-gray-500 dark:text-dark-txt">
                {Item.dislikes} Dislikes
              </span>
              <div className="rounded-full grid place-items-center text-xl -ml-1 text-red-500">
                <i className="bx bxs-dislike"></i>
              </div>
            </div>
          </div>
          <div className="text-gray-500 dark:text-dark-txt"></div>
        </div>

        <div class="py-2 px-4">
          <div class="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
            <ButtonsIteraction
              openModal={openModal}
              isOpen={isOpen}
              closeModal={closeModal}
              add_like_or_dislike={props.add_like_or_dislike}
              idPost={Item.id}
            />
          </div>
        </div>
      </div>
    </>
  );
}
