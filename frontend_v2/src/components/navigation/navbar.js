import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logout } from "@/redux/actions/auth";
import Alert from "../alert";

import { Menu, Transition, Disclosure } from "@headlessui/react";
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
import Show_Cart from "../tienda/show_cart/showCart.jsx";

import { get_items, get_total, get_item_total } from "@/redux/actions/cart";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const NavBar = ({
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
  const [shadow, setShadow] = useState([false, false, false, false, false]);
  useEffect(() => {
    get_categories();
    get_items();
    get_total();
    get_item_total();
  }, []);
  useEffect(() => {
    console.log(shadow);
  }, [shadow]);
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
    //console.log("open");
  }
  function openModalCart() {
    setIsOpenCart(true);
    //console.log("open");
  }
  function ChangeShadows(id) {
    //setShadow([false, false, false, false, false]);
    const shadowCopy = [...shadow];
    shadowCopy[id] = true;
    setShadow(shadowCopy);
  }

  const IsNotAuthenticated = (
    <>
      <Link
        href="/auth/register/"
        class="inline-flex items-center ml-4 lg:ml-6 bg-gray-900 border-0 px-3 py-2 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white font-medium"
      >
        Register
      </Link>
      <Link
        href="/auth/login/"
        class="inline-flex items-center ml-4 bg-gray-900 border-0 px-3 py-2 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white font-medium"
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
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-3 sm:pr-0">
      <button
        type="button"
        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-4">
        <div>
          <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <div>
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={`${APP_URL_SERVIDOR}${String(photoUser)}`}
                alt=""
              />
              {total_items > 0 && (
                <span class="bg-red-600 w-2 h-2 rounded-full absolute right-0.5 top-0.5 border-gray-900 border-0"></span>
              )}
            </div>
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
      {/*<ShowCart isOpen={isOpenCart} closeModal={closeModalCart} />*/}
      <Show_Cart open={isOpenCart} setOpen={setIsOpenCart} />
    </div>
  );

  const navigation = [
    { id: 0, name: "Blog", href: "/blog/", current: shadow[0] },
    { id: 1, name: "Tienda", href: "/shop/", current: shadow[1] },
    { id: 2, name: "Chat", href: "/messenger/", current: shadow[2] },
    { id: 3, name: "Suscription", href: "/reload/", current: shadow[3] },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 mb-16">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-8 h-8 text-white p-2 bg-indigo-500 rounded-full"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <span class="ml-3 text-sm font-semibold text-white">
                    Home
                  </span>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      href="/blog/"
                      onClick={(e) => ChangeShadows(0)}
                      className={classNames(
                        navigation[0].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[0].current ? "page" : undefined}
                    >
                      Blog
                    </Link>

                    <Link
                      href="/shop/"
                      onClick={(e) => ChangeShadows(1)}
                      className={classNames(
                        navigation[1].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[1].current ? "page" : undefined}
                    >
                      Tienda
                    </Link>
                    <Link
                      href="/messenger/"
                      onClick={(e) => ChangeShadows(2)}
                      className={classNames(
                        navigation[2].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[2].current ? "page" : undefined}
                    >
                      Chat
                    </Link>
                    <Link
                      href="/reload/"
                      onClick={(e) => ChangeShadows(3)}
                      className={classNames(
                        navigation[3].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[3].current ? "page" : undefined}
                    >
                      Suscripcion
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-5">
                  <button
                    type="button"
                    onClick={openModalCart}
                    className="group -m-2 flex items-center p-2"
                  >
                    {total_items > 0 ? (
                      <>
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-red-700 group-hover:text-gray-500"
                          aria-hidden="true"
                        />{" "}
                        <span className="ml-2 text-sm font-medium text-red-700 group-hover:text-gray-800">
                          {total_items}
                        </span>
                      </>
                    ) : (
                      <>
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          {total_items}
                        </span>
                      </>
                    )}

                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>
                {isAuthenticated == true && isAuthenticated != null
                  ? IsSuccessAutheticated
                  : IsNotAuthenticated}
              </div>
            </div>
          </div>
          <Alert />
        </>
      )}
    </Disclosure>
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
})(NavBar);
