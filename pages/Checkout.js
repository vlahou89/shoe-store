import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import ThankYouModal from '../components/ThankYouModal';
import Link from 'next/link';

function Checkout() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleModal() {
    setIsVisible(!isVisible);
  }

  return (
    <div
      className=" m-auto
  bg-[url('https://images.unsplash.com/photo-1526745925052-dd824d27b9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]
  bg-cover bg-center overflow-x-hidden h-screen
"
    >
      {' '}
      <div>
        <Navbar />{' '}
        <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24 backdrop-brightness-50"
        >
          {' '}
          {!isVisible && (
            <div className="max-w-lg mx-auto bg-blueGray p-14 mt-32">
              <div className="flex justify-center">
                <Link href="/login">
                  <a className="px-4 text-sm font-medium text-white tracking-widest ">
                    Login / Register
                  </a>
                </Link>
              </div>

              <div className="relative mt-8">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-sm font-medium text-black">
                    {' '}
                    or Checkout as Guest{' '}
                  </span>
                </div>
              </div>

              <form className="mt-6">
                <div className="grid grid-cols-12 gap-y-6 gap-x-4">
                  <div className="col-span-full">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email-address"
                        name="email-address"
                        autoComplete="email"
                        className="shadow-sm  border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="name-on-card"
                      className="block text-sm font-medium text-white"
                    >
                      Name on card
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name-on-card"
                        name="name-on-card"
                        autoComplete="cc-name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium text-white"
                    >
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        autoComplete="cc-number"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      />
                    </div>
                  </div>

                  <div className="col-span-8 sm:col-span-9">
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-medium text-white"
                    >
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        autoComplete="cc-exp"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      />
                    </div>
                  </div>

                  <div className="col-span-4 sm:col-span-3">
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-white"
                    >
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        autoComplete="csc"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-white"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        autoComplete="street-address"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      />
                    </div>
                  </div>

                  <div className="col-span-full sm:col-span-4">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-white"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        autoComplete="address-level2"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      />
                    </div>
                  </div>

                  <div className="col-span-full sm:col-span-4">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-white"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="region"
                        name="region"
                        autoComplete="address-level1"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      />
                    </div>
                  </div>

                  <div className="col-span-full sm:col-span-4">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-white"
                    >
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="postal-code"
                        name="postal-code"
                        autoComplete="postal-code"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex space-x-2">
                  <div className="flex items-center h-5">
                    <input
                      id="same-as-shipping"
                      name="same-as-shipping"
                      type="checkbox"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    />
                  </div>
                  <label
                    htmlFor="same-as-shipping"
                    className="text-sm font-medium text-white"
                  >
                    Billing address is the same as shipping address
                  </label>
                </div>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gold px-10 py-3 w-full mt-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Pay now
                </button>

                <p className="flex justify-center text-sm font-medium text-white mt-6">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Payment details stored in plain text
                </p>
              </form>
            </div>
          )}
        </section>
      </div>
      {isVisible && <ThankYouModal />}
    </div>
  );
}

export default Checkout;
