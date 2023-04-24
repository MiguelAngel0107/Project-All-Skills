import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logout } from "@/redux/actions/auth";
import Alert from "../alert";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import {
  EditInactiveIcon,
  EditActiveIcon,
  DuplicateInactiveIcon,
  DuplicateActiveIcon,
  ArchiveInactiveIcon,
  ArchiveActiveIcon,
  MoveInactiveIcon,
  MoveActiveIcon,
  DeleteInactiveIcon,
  DeleteActiveIcon,
} from "./helperNav";
import APP_URL_SERVIDOR from "@/globals";
import SellProducts from "../tienda/sellProducts/sellProducts";
import { get_categories } from "@/redux/actions/categories";
import { created_product } from "@/redux/actions/products";
import ShowCart from "../tienda/showCart/showCart";

import { get_items, get_total, get_item_total } from "@/redux/actions/cart";

const NavBar2 = ({
  isAuthenticated,
  logout,
  photoUser,
  categories,
  get_categories,
  created_product,
  total_items,

  get_items,
  get_total,
  get_item_total,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    get_categories();
    get_items();
    get_total();
    get_item_total();
  }, []);
  const router = useRouter();
  if (redirect) {
    router.push("/");
    setRedirect(false);
  }
  const logoutHandler = () => {
    logout();
    setRedirect(true);
  };

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
    console.log("open");
  }

  function closeModalCart() {
    setIsOpenCart(false);
  }
  function openModalCart() {
    setIsOpenCart(true);
    console.log("open");
  }

  const IsNotAuthenticated = (
    <>
      <Link
        href="/auth/register/"
        class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      >
        Register
      </Link>
      <Link
        href="/auth/login/"
        class="inline-flex items-center ml-4 bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      >
        Login
      </Link>
    </>
  );
  const categoriesTemplate = [
    {
      id: 1,
      name: "Food",
      sub_categories: [],
    },
    {
      id: 2,
      name: "Tecnology",
      sub_categories: [],
    },
    {
      id: 3,
      name: "Electronica",
      sub_categories: [],
    },
    {
      id: 4,
      name: "Musica",
      sub_categories: [],
    },
  ];
  let CategorySuccess;
  categories
    ? (CategorySuccess = categories)
    : (CategorySuccess = categoriesTemplate);

  const IsSuccessAutheticated = (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-900 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {photoUser == null ? (
              <FontAwesomeIcon
                icon={faCircleUser}
                className="h-10 w-10 text-indigo-400"
              />
            ) : (
              <div className="relative">
                <img
                  class="h-14 w-14 rounded-full border-gray-800 border-4"
                  src={`${APP_URL_SERVIDOR}${String(photoUser)}`}
                  alt="Banner"
                />
                {total_items > 0 && (
                  <span class="bg-red-600 w-5 h-5 rounded-full absolute -right-0.5 -top-0.5 border-gray-900 border-4"></span>
                )}
              </div>
            )}
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/perfil/view-all/"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Perfil
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={openModal}
                    type="button"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Sell
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={openModalCart}
                    type="button"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Cart
                    {total_items > 0 ? (
                      <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center absolute right-4">
                        {total_items}
                      </span>
                    ) : (
                      <></>
                    )}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    type="button"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Close Session
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <SellProducts
        isOpen={isOpen}
        closeModal={closeModal}
        categories={CategorySuccess}
        created_product={created_product}
      />
      <ShowCart isOpen={isOpenCart} closeModal={closeModalCart} />
    </div>
  );

  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl"></span>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link href="/blog/" class="mr-5 hover:text-white">
            Blog
          </Link>
          <Link href="/shop/" class="mr-5 hover:text-white">
            Tienda
          </Link>
          <Link href="/messenger/" class="mr-5 hover:text-white">
            Chat
          </Link>
          <Link href="/reload/" class="mr-5 hover:text-white">
            Suscripcion
          </Link>
        </nav>

        {isAuthenticated == true && isAuthenticated != null
          ? IsSuccessAutheticated
          : IsNotAuthenticated}

        <Alert />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  photoUser: state.User.picture,
  categories: state.Category.categories,
  total_items: state.Cart.total_items,
});

export default connect(mapStateToProps, {
  logout,
  get_categories,
  created_product,

  get_items,
  get_total,
  get_item_total,
})(NavBar2);
