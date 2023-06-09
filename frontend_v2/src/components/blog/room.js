import React from "react";

export default function Room() {
  return (
    <div class="p-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second overflow-hidden">
      <div class="flex space-x-4 relative">
        <div class="w-1/2 lg:w-3/12 flex space-x-2 items-center justify-center border-blue-200 dark:border-blue-700 rounded-full cursor-pointer">
          <i class="bx bxs-video-plus text-2xl text-purple-500"></i>
          <span class="text-sm font-semibold text-blue-500">Create Room</span>
        </div>
        <div class="relative cursor-pointer">
          <img
            src="./images/avt-3.jpg"
            alt="Profile picture"
            class="rounded-full"
          />
          <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div class="relative cursor-pointer">
          <img
            src="./images/avt-4.jpg"
            alt="Profile picture"
            class="rounded-full"
          />
          <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div class="relative cursor-pointer">
          <img
            src="./images/avt-5.jpg"
            alt="Profile picture"
            class="rounded-full"
          />
          <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div class="relative cursor-pointer">
          <img
            src="./images/avt-2.jpg"
            alt="Profile picture"
            class="rounded-full"
          />
          <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div class="relative cursor-pointer hidden sm:inline">
          <img
            src="./images/avt-3.jpg"
            alt="Profile picture"
            class="rounded-full"
          />
          <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div class="relative cursor-pointer hidden sm:inline">
          <img
            src="./images/avt-4.jpg"
            alt="Profile picture"
            class="rounded-full"
          />
          <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div class="relative cursor-pointer hidden sm:inline">
          <img
            src="./images/avt-5.jpg"
            alt="Profile picture"
            class="rounded-full"
          />
          <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div class="relative cursor-pointer hidden sm:inline">
          <img
            src="./images/avt-7.jpg"
            alt="Profile picture"
            class="rounded-full"
          />
          <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div class="relative cursor-pointer hidden sm:inline">
          <img
            src="./images/avt-3.jpg"
            alt="Profile picture"
            class="rounded-full"
          />
          <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div class="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl text-gray-500 bg-white absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
          <i class="bx bxs-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
