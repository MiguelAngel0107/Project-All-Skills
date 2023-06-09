import { useEffect, useState } from "react";
import SubOptions from "./subOptions";
import { connect } from "react-redux";

import { get_categories } from "@/redux/actions/categories";

import { get_filtered_products } from "@/redux/actions/products";

const SideFilter = ({
  categories,
  get_categories,
  get_filtered_products,
  setFiltered,
}) => {
  const [formData, setFormData] = useState({
    category_id: "0",
    price_range: "Any",
    sortBy: "created",
    order: "desc",
  });
  useEffect(() => {
    get_categories();
  }, []);
  useEffect(() => {
    get_filtered_products(category_id, price_range, sortBy, order);
  }, [formData]);

  const { category_id, price_range, sortBy, order } = formData;

  const onClick = (key, value) => {
    setFormData({ ...formData, [key]: value });
    setFiltered(true);
  };


  return (
    <>
      <div class="flex h-auto flex-col justify-between border-r bg-gray-900">
        <div class="px-4 py-6">
          <button
            type="button"
            class="grid h-10 w-32 place-content-center rounded-lg bg-red-800 text-xs text-white"
          >
            Reset
          </button>

          <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
            <button
              type="button"
              onClick={() => setFiltered(false)}
              class="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 hover:text-gray-200"
            >
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span class="text-sm font-medium"> All Products </span>
            </button>

            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-800 hover:text-gray-200">
                <div class="flex items-center gap-2">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <span class="text-sm font-medium"> Categories </span>
                </div>

                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
                {categories &&
                  categories !== null &&
                  categories !== undefined &&
                  categories.map((category) => {
                    if (category.sub_categories.length === 0) {
                      return (
                        <SubOptions
                          key={category.id}
                          onClick={onClick}
                          category={category}
                          llave={"category_id"}
                        />
                      );
                    } else {
                      let result = [];
                      result.push(
                        <SubOptions
                          key={category.id}
                          onClick={onClick}
                          category={category}
                          llave={"category_id"}
                        />
                      );

                      category.sub_categories.map((sub_category) => {
                        result.push(
                          <SubOptions
                            key={category.id}
                            onClick={onClick}
                            category={category}
                            llave={"category_id"}
                          />
                        );
                      });

                      return result;
                    }
                  })}
              </nav>
            </details>

            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-800 hover:text-gray-200">
                <div class="flex items-center gap-2">
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

                  <span class="text-sm font-medium"> Prices </span>
                </div>

                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4"></nav>
            </details>

            <a
              href="#"
              class="flex items-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-gray-800 hover:text-gray-200"
            >
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
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>

              <span class="text-sm font-medium"> Invoices </span>
            </a>

            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-800 hover:text-gray-200">
                <div class="flex items-center gap-2">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span class="text-sm font-medium"> Account </span>
                </div>

                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav aria-label="Account Nav" class="mt-2 flex flex-col px-4">
                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
                >
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
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>

                  <span class="text-sm font-medium"> Details </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
                >
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>

                  <span class="text-sm font-medium"> Security </span>
                </a>

                <form action="/logout">
                  <button
                    type="submit"
                    class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
                  >
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
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>

                    <span class="text-sm font-medium"> Logout </span>
                  </button>
                </form>
              </nav>
            </details>
          </nav>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  categories: state.Category.categories,
  filtered_products: state.Products.filtered_products,
});

export default connect(mapStateToProps, {
  get_categories,
  get_filtered_products,
})(SideFilter);
