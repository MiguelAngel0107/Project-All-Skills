import React from "react";

const IconCalendar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5 opacity-75"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
const IconProhibited = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5 opacity-75"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
    />
  </svg>
);
const IconWallet = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5 opacity-75"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);

export default function SubOptions(props) {
  const key = props.llave
  const value = props.category.id.toString()
  return (
    <button
      type="button"
      onClick={() => props.onClick(key, value)}
      class="flex items-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
    >
      {IconProhibited}

      <span class="text-sm font-medium"> {props.category.name} </span>
    </button>
  );
}
