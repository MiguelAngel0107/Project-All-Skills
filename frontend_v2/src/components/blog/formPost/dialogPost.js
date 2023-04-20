import { text } from "@fortawesome/fontawesome-svg-core";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function DialogPost(props) {
  const [formState, setFormState] = useState({
    texto: "",
    imagen: null,
  });

  const { texto, imagen } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append("body", texto)
    formData.append("image", imagen)
    props.create_new_post(formData);
  };

  const handleImageChange = (event) => {
    setFormState({ ...formState, imagen: event.target.files[0] });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Transition
      class="fixed z-10 inset-0 overflow-y-auto"
      appear
      show={props.isOpen}
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          ​
        </span>

        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                class="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Upload Post
              </h3>
              <form onSubmit={(e) => handleSubmit(e)} class="mt-2">
                <div class="mb-2">
                  <input
                    type="file"
                    name="imagen"  
                    onChange={(e) => handleImageChange(e)}
                    multiple
                    class="relative dark:text-dark-txt dark:bg-dark-second cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  />
                </div>

                <textarea
                  type="text"
                  name="texto"
                  value={texto}
                  onChange={(e) => handleInputChange(e)}
                  cols="40"
                  rows="3"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt flex max-w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Say Something..."
                  required=""
                ></textarea>

                <button
                  type="submit"
                  onClick={props.closeModal}
                  class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button
              type="button"
              onClick={props.closeModal}
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
}
