import React, { Fragment } from "react";
import { connect } from "react-redux";
import alert from "@/redux/reducers/alert";

export const Alert = ({ alert }) => {
  let claseStyle1 = "rounded-xl border border-gray-100 p-4 shadow-xl dark:border-gray-800 fixed top-24 right-[210px] bg-green-600";
  let letters = "Success"
  let notClose = "text-green-600 transition hover:text-green-600 dark:text-green-600 dark:hover:text-green-600"

  if (alert !== null && alert.alertType === "red") {
    claseStyle1 = "rounded-xl border border-gray-100 p-4 shadow-xl dark:border-gray-800 fixed top-24 right-[210px] bg-red-600";
    letters = "Error"
    notClose = "text-red-600 transition hover:text-red-600 dark:text-red-600 dark:hover:text-red-600"
  }
  const AlertContainer = (
    <div
      role="alert"
      class={claseStyle1}
    >
      <div class="flex items-start gap-4">
        <span class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div class="flex-1">
          <strong class="block font-medium text-gray-900 dark:text-white">
            {letters}
          </strong>

          <p class="mt-1 text-sm text-gray-700 dark:text-gray-200">
            {alert != undefined && alert != null ? alert.msg : <></>}
          </p>
        </div>

        <button class={notClose}>
          <span class="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  return alert != null ? AlertContainer : <Fragment></Fragment>;
};

const mapStateToProps = (state) => ({
  alert: state.Alert.alert,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
