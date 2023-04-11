import { useState, Fragment } from "react";
import DialogComment from "../formPost/dialogComment";

export default function ButtonsIteraction(props) {
  return (
    <div class="flex space-x-2">
      <form method="POST" action="/social/post/2/like/" class="mt-2 px-2">
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          value="lGp0m8FHoru1K4Sn1uf9jsC08dAf0u5Rq2TxKODICjE7CB1ymPOHjmBCthCGcG3u"
        />
        <input type="hidden" name="next" value="/" />
        <button
          type="submit"
          class=" flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
        >
          <i class="bx bx-like"></i>
          <p class="text-sm font-semibold">Like</p>
        </button>
      </form>
      <form method="POST" action="/social/post/2/dislike" class="mt-2 px-2">
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          value="lGp0m8FHoru1K4Sn1uf9jsC08dAf0u5Rq2TxKODICjE7CB1ymPOHjmBCthCGcG3u"
        />
        <input type="hidden" name="next" value="/" />
        <button
          type="submit"
          class=" flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
        >
          <i class="bx bx-dislike"></i>
          <p class="text-sm font-semibold">Dislike</p>
        </button>
      </form>
      <div
        onClick={props.openModal}
        class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
      >
        <i class="bx bx-comment"></i>
        <span class="text-sm font-semibold">Comment</span>
      </div>

      <DialogComment isOpen={props.isOpen} closeModal={props.closeModal} />
    </div>
  );
}
