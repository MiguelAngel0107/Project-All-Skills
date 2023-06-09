import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SubMenu1(props) {
  const router = useRouter();
  const path = router.pathname;
  const select = (
    <span class="absolute inset-x-0 -bottom-px h-px w-full bg-indigo-600"></span>
  );

  return (
    <ul class="flex border-b border-gray-100">
      <li class="flex-1">
        <div
          class="relative block p-4"
          onClick={(e) => props.setHover([true, false, false, false])}
        >
          {props.hover[0] ? select : null}

          <div class="flex items-center justify-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={
                props.hover[0]
                  ? "h-5 w-5 flex-shrink-0 text-gray-500 dark:text-indigo-500 group-hover:text-indigo-500"
                  : "h-5 w-5 flex-shrink-0 text-gray-500 dark:text-white group-hover:text-indigo-500"
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>

            <span class={
                props.hover[0]
                  ? "ml-3 text-sm font-medium text-gray-900 dark:text-indigo-500 group-hover:text-indigo-500"
                  : "ml-3 text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-500"
              }>
              {" "}
              Settings{" "}
            </span>
          </div>
        </div>
      </li>

      <li class="flex-1">
        <div
          class="relative block p-4"
          onClick={(e) => props.setHover([false, true, false, false])}
        >
          {props.hover[1] ? select : null}
          <div class="flex items-center justify-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={
                props.hover[1]
                  ? "h-5 w-5 flex-shrink-0 text-gray-500 dark:text-indigo-500 group-hover:text-indigo-500"
                  : "h-5 w-5 flex-shrink-0 text-gray-500 dark:text-white group-hover:text-indigo-500"
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>

            <span class={
                props.hover[1]
                  ? "ml-3 text-sm font-medium text-gray-900 dark:text-indigo-500 group-hover:text-indigo-500"
                  : "ml-3 text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-500"
              }>
              {" "}
              Messages{" "}
            </span>
          </div>
        </div>
      </li>

      <li class="flex-1">
        <div
          class="relative block p-4"
          onClick={(e) => props.setHover([false, false, true, false])}
        >
          {props.hover[2] ? select : null}
          <div class="flex items-center justify-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={
                props.hover[2]
                  ? "h-5 w-5 flex-shrink-0 text-gray-500 dark:text-indigo-500 group-hover:text-indigo-500"
                  : "h-5 w-5 flex-shrink-0 text-gray-500 dark:text-white group-hover:text-indigo-500"
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>

            <span class={
                props.hover[2]
                  ? "ml-3 text-sm font-medium text-gray-900 dark:text-indigo-500 group-hover:text-indigo-500"
                  : "ml-3 text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-500"
              }>
              {" "}
              Archive{" "}
            </span>
          </div>
        </div>
      </li>

      <li class="flex-1">
        <div
          class="relative block p-4"
          onClick={(e) => props.setHover([false, false, false, true])}
        >
          {props.hover[3] ? select : null}
          <div class="flex items-center justify-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={
                props.hover[3]
                  ? "h-5 w-5 flex-shrink-0 text-gray-500 dark:text-indigo-500 group-hover:text-indigo-500"
                  : "h-5 w-5 flex-shrink-0 text-gray-500 dark:text-white group-hover:text-indigo-500"
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>

            <span
              class={
                props.hover[3]
                  ? "ml-3 text-sm font-medium text-gray-900 dark:text-indigo-500 group-hover:text-indigo-500"
                  : "ml-3 text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-500"
              }
            >
              Notifications
            </span>
          </div>
        </div>
      </li>
    </ul>
  );
}
