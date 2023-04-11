import React from "react";
import { useState } from "react";
import DialogPost from "./formPost/dialogPost";
import { create_new_post } from "@/redux/actions/blog";
import { connect } from "react-redux";

const FormPost = ({
  create_new_post
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div class="max-w-full px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
      <button
        class="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4"
        type="button"
        onClick={openModal}
      >
        <img
          src="/media/users/admin/profile.jpg"
          alt="Profile picture"
          class="w-10 h-10 rounded-full"
        />
        <div class="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt">
          <span>What's on your mind, admin?</span>
        </div>
      </button>
      <div class="p-2 flex">
        <div class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
          <i class="bx bxs-video-plus"></i>
          <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
            Live video
          </span>
        </div>
        <div class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
          <i class="bx bx-images"></i>
          <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
            Live video
          </span>
        </div>
        <div class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
          <i class="bx bx-smile"></i>
          <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
            Live video
          </span>
        </div>
      </div>
      <DialogPost isOpen={isOpen} closeModal={closeModal} create_new_post={create_new_post}/>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.Products.products,
  filtered_products: state.Products.filtered_products,
});

export default connect(mapStateToProps, {
  create_new_post,
})(FormPost);