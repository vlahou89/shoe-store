import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import ShoppingCart from './ShoppingCart';
import { products } from '../json/data';
import Link from 'next/link';

export const getStaticProps = async () => {
  return {
    props: {
      productList: products,
    },
  };
};

function Navbar({ productList }) {
  const [isShow, setIsShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  const handleMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="fixed top-0 w-screen z-30">
      <div className="bg-white">
        {showMenu && (
          <div
            className="relative z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 "></div>

            <div className="fixed inset-0 z-40 flex ">
              <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={closeMenu}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-2">
                  <div>
                    <div
                      className="-mb-px flex space-x-8 px-4"
                      aria-orientation="horizontal"
                      role="tablist"
                    >
                      <button
                        id="tabs-1-tab-1"
                        className="bg-gold text-white  border-r-2 border-gold hover:bg-gold border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                        aria-controls="tabs-1-panel-1"
                        role="tab"
                        type="button"
                      >
                        WOMEN
                      </button>
                      <button
                        id="tabs-1-tab-2"
                        className="bg-gold text-white hover:bg-gold border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                        aria-controls="tabs-1-panel-2"
                        role="tab"
                        type="button"
                      >
                        MEN
                      </button>
                    </div>
                  </div>
                  <div
                    id="tabs-1-panel-1"
                    className="space-y-10 px-4 pt-10 pb-8"
                    aria-labelledby="tabs-1-tab-1"
                    role="tabpanel"
                    tabIndex="0"
                  >
                    <div>
                      <Link href="#">
                        <a className="-m-2 block p-2 font-semibold text-gold md:text-xl">
                          CATEGORIES
                        </a>
                      </Link>
                      <ul
                        role="list"
                        aria-labelledby="women-clothing-heading-mobile"
                        className="mt-6 flex flex-col space-y-6"
                      >
                        <li className="flow-root">
                          <Link href="#">
                            <a className="-m-2 block p-2 font-semibold text-gold md:text-xl">
                              Pumps
                            </a>
                          </Link>
                        </li>

                        <li className="flow-root">
                          <Link href="#">
                            <a className="-m-2 block p-2 font-semibold text-gold md:text-xl">
                              Stilettos
                            </a>
                          </Link>
                        </li>

                        <li className="flow-root">
                          <Link href="#">
                            <a className="-m-2 block p-2 font-semibold text-gold md:text-xl">
                              Ankle boots
                            </a>
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link href="#">
                            <a className="-m-2 block p-2 font-semibold text-gold md:text-xl">
                              Ankle Strap Heels
                            </a>
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link href="#">
                            <a className="-m-2 block p-2 font-semibold text-gold md:text-xl">
                              Wedges
                            </a>
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link href="#">
                            <a className="-m-2 block p-2 font-semibold text-gold md:text-xl">
                              Trainers
                            </a>
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link href="#">
                            <a className="-m-2 block p-2 font-semibold text-gold md:text-xl">
                              Boots
                            </a>
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link href="#">
                            <a className="-m-2 block p-2 font-semibold text-gold md:text-xl">
                              Loafer
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <Link
                      href="#"
                      className="-m-2 block p-2  text-gold font-semibold md:text-xl"
                    >
                      COMPANY
                    </Link>
                  </div>

                  <div className="flow-root">
                    <Link
                      href="#"
                      className="-m-2 block p-2 text-gold font-semibold md:text-xl"
                    >
                      STORES
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <header className="relative bg-blueGray">
          <p className="flex h-10 items-center justify-center bg-gold px-4 text-sm md:text-lg tracking-wide  font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over £100
          </p>

          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 "
          >
            <div>
              <div className="flex h-16 items-center ">
                <button
                  type="button"
                  className="rounded-md bg-blueGray p-2 text-white cursor-pointer lg:hidden"
                  onClick={handleMenu}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>

                <div className="mt-2 flex lg:ml-0">
                  <Link href="/">
                    <div>
                      <span className="sr-only">Golden Shoe</span>
                      <Image
                        className="w-auto"
                        src="/LOGO.png"
                        alt=""
                        width={100}
                        height={50}
                      />
                    </div>
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    <div className="flex">
                      <div className="relative flex">
                        <Link href="/Shop">
                          <a className="border-transparent text-white hover:border-b-2 hover:border-gold relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out">
                            Women
                          </a>
                        </Link>
                      </div>

                      <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                        <div
                          className="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="relative flex">
                        <Link href="/Shop">
                          <a className="border-transparent text-white hover:border-b-2 hover:border-gold relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out">
                            Men
                          </a>
                        </Link>
                      </div>

                      <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                        <div
                          className="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>

                    <Link href="#">
                      <a className="border-transparent text-white hover:border-b-2 hover:border-gold relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out">
                        Company
                      </a>
                    </Link>

                    <Link href="#">
                      <a className="border-transparent text-white hover:border-b-2 hover:border-gold relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out">
                        Stores
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="flex lg:ml-6">
                    <Link
                      href="#"
                      className=" text-gray-400 hover:text-gray-500"
                    >
                      <div>
                        <span className="sr-only">Search</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#FFFFFF"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>

                  <div className="ml-2 flow-root lg:ml-6">
                    <Link
                      href="/login"
                      className="group -m-2 flex items-center p-2"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="white"
                          className="w-6 h-6 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>

                  <div className="ml-4 flow-root lg:ml-6">
                    <button
                      onClick={handleClick}
                      className="group -m-2 flex items-center p-2"
                    >
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FFFFFF"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-white">
                        2
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div>{isShow && <ShoppingCart />}</div>
    </div>
  );
}

export default Navbar;
