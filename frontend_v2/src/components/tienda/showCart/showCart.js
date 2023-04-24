import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import ShowItem from "./showItem";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";
const ShowCart = (props) => {
  const [itemProduct, setItemProduct] = useState([]);

  useEffect(() => {
    setItemProduct(props.items);
    console.log(itemProduct);
  }, [props.items]);

  const showItem = () => {
    let display = [];
    if (itemProduct && itemProduct !== null) {
      itemProduct.map((item, index) => {
        return display.push(<ShowItem key={index} item={item} />);
      });
    }
    return display;
  };

  return (
    <Transition
      class="fixed z-10 inset-0 overflow-y-auto"
      show={props.isOpen}
      as="div"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="inline-block align-bottom bg-white rounded-lg shadow-xl transform transition-all text-left overflow-hidden sm:my-8 sm:align-middle sm:p-6">
          <button
            onClick={props.closeModal}
            className="absolute top-0 right-0 mt-2 mr-2 text-2xl hover:text-black"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="">
            <section>
              <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div class="mx-auto max-w-3xl">
                  <header class="text-center">
                    <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
                      Your Cart
                    </h1>
                  </header>

                  <div class="mt-8">
                    <ul class="space-y-4">{itemProduct && showItem()}</ul>

                    <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
                      <div class="w-screen max-w-lg space-y-4">
                        <dl class="space-y-0.5 text-sm text-gray-700">
                          <div class="flex justify-between">
                            <dt>Subtotal</dt>
                            <dd>£250</dd>
                          </div>

                          <div class="flex justify-between">
                            <dt>VAT</dt>
                            <dd>£25</dd>
                          </div>

                          <div class="flex justify-between">
                            <dt>Discount</dt>
                            <dd>-£20</dd>
                          </div>

                          <div class="flex justify-between !text-base font-medium">
                            <dt>Total</dt>
                            <dd>£{props.amount}</dd>
                          </div>
                        </dl>

                        <div class="flex justify-end">
                          <span class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="-ms-1 me-1.5 h-4 w-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                              />
                            </svg>

                            <p class="whitespace-nowrap text-xs">
                              2 Discounts Applied
                            </p>
                          </span>
                        </div>

                        <div class="flex justify-end">
                          <Link
                            href="/payment/payment"
                            class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                          >
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Transition>
  );
};

const mapStateToProps = (state) => ({
  items: state.Cart.items,
  amount: state.Cart.amount,
});

export default connect(mapStateToProps, {})(ShowCart);
