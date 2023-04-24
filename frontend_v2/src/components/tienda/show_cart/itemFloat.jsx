import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import APP_URL_SERVIDOR from "@/globals";

function ItemFloat(props) {
  const showNotification = props.showNotification;
  return (
    <div class="fixed top-16 sm:right-20 z-50 right-5">
      <Transition
        show={showNotification}
        enter="transform transition duration-300 ease-out"
        enterFrom="translate-x-full"
        enterTo="translate-y-0"
        leave="transform transition duration-300 ease-out"
        leaveFrom="translate-y-0"
        leaveTo="translate-x-full"
      >
        <div className="p-2 w-64 sm:w-72 bg-white rounded-lg ">
          <Link href="#" class="group block overflow-hidden">
            <div class="relative h-[250px] sm:h-[350px]">
              <img
                src={`${APP_URL_SERVIDOR}${props.photo}`}
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div class="relative bg-white pt-3">
              <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                {props.title}
              </h3>

              <p class="mt-1.5 tracking-wide text-gray-900">${props.price}</p>
            </div>
          </Link>
        </div>
      </Transition>
    </div>
  );
}

export default ItemFloat;
