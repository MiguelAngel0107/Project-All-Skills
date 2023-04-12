import { Menu, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { formatDate } from "@/helpers/formatDate";
import APP_URL_SERVIDOR from "@/globals";

export default function HeaderPost(props) {
  const fecha = props.date
  const fechaLegible = formatDate(fecha)
  return (
    <div class="flex items-center justify-between px-4 py-2">
      <div class="flex space-x-2 items-center">
        <div class="relative">
          <img
            src={`${APP_URL_SERVIDOR}${props.photo}`}
            alt="admin picture"
            class="w-10 h-10 rounded-full"
          />
          <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div>
          <a href="/user/admin/">
            <div class="font-semibold">{props.author}</div>
          </a>
          <span class="text-sm text-gray-500">{fechaLegible}</span>
        </div>
      </div>

      <Menu as="div" class="relative inline-block text-left">
        <div>
          <Menu.Button
            type="button"
            class="bg-white dark:bg-dark-second  rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-dark-second focus:ring-offset-gray-100 focus:ring-white"
          >
            <span class="sr-only">Open options</span>

            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <div class="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg dark:bg-dark-third bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1" role="none">
                <a
                  href="/social/post/edit/2/"
                  class="dark:hover:bg-dark-second dark:text-dark-txt text-gray-700 block px-4 py-2 text-sm"
                >
                  Edit
                </a>
                <a
                  href="/social/post/delete/2/"
                  class="dark:hover:bg-dark-second dark:text-dark-txt text-gray-700 block px-4 py-2 text-sm"
                >
                  Delete
                </a>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
