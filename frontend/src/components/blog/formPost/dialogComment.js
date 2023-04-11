import { Dialog, Transition } from "@headlessui/react";

export default function DialogComment(props) {
  return (
    <Transition
      class="fixed z-10 inset-0 overflow-y-auto"
      show={props.isOpen}
      as="div"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          ​
        </span>

        <div class="inline-block align-bottom dark:bg-dark-second bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-lg leading-6 font-medium dark:text-dark-txt text-gray-900"
                id="modal-title"
              >
                Comment Something
              </h3>
              <div class="mt-2">
                <p class="text-sm dark:text-dark-txt text-gray-500">
                  Share you thoughts on this post
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3">
            <div class="mt-5 sm:mt-6 ">
              <form method="POST" class="inline-flex">
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="lGp0m8FHoru1K4Sn1uf9jsC08dAf0u5Rq2TxKODICjE7CB1ymPOHjmBCthCGcG3u"
                />

                <div class="block">
                  <button
                    type="button"
                    onClick={props.closeModal}
                    class="inline-flex items-center ml-1 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
