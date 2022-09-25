import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Newsletter from '../../components/Newsletter';

export default function Project() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div class="bg-white mt-20">
        <div class="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div class="flex items-center">
                  <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                    Men
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    class="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li>
                <div class="flex items-center">
                  <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                    Clothing
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    class="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li class="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  class="font-medium text-gray-500 hover:text-gray-600"
                >
                  Basic Tee 6-Pack
                </a>
              </li>
            </ol>
          </nav>

          <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
              <img
                src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4a%2F92%2F4a929e66960634472b69952f7f70dca5db463539.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                alt="Two each of gray, white, and black shirts laying flat."
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F25%2Fdb%2F25db6dd8e2b6865c87aa68b8b1d6a2212bc4bd41.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
                  alt="Model wearing plain black basic tee."
                  class="h-80 w-full object-cover object-center"
                />
              </div>
              <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F99%2F69%2F996945ed9ac366a75080048d6fd7b9bb64eea03a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
                  alt="Model wearing plain gray basic tee."
                  class="h-80 w-full object-cover object-center"
                />
              </div>
            </div>
            <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              <img
                src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fdb%2F66%2Fdb6626b65e7597b36d6795f83ad8d66f0bee7535.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
                alt="Model wearing plain white basic tee."
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                White trainers
              </h1>
            </div>

            <div class="mt-4 lg:row-span-3 lg:mt-0">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-900">$192</p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              error ullam, quos sit ipsam illo placeat? Velit nemo sapiente,
              laboriosam eius porro, cum a, beatae placeat exercitationem
              aspernatur vitae. Aut.
              <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-gold"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      class="text-gold h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      class="text-gold h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      class="text-gold h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      class="text-gray-200 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="sr-only">4 out of 5 stars</p>
                  <a href="#" class="ml-3 text-sm font-medium text-gold ">
                    117 reviews
                  </a>
                </div>
              </div>
              <form class="mt-10">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Color</h3>

                  <fieldset class="mt-4">
                    <legend class="sr-only">Choose a color</legend>
                    <div class="flex items-center space-x-3">
                      <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input
                          type="radio"
                          name="color-choice"
                          value="White"
                          class="sr-only"
                          aria-labelledby="color-choice-0-label"
                        />
                        <span id="color-choice-0-label" class="sr-only">
                          {' '}
                          White{' '}
                        </span>
                        <span
                          aria-hidden="true"
                          class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                        ></span>
                      </label>

                      <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input
                          type="radio"
                          name="color-choice"
                          value="Gray"
                          class="sr-only"
                          aria-labelledby="color-choice-1-label"
                        />
                        <span id="color-choice-1-label" class="sr-only">
                          {' '}
                          Gray{' '}
                        </span>
                        <span
                          aria-hidden="true"
                          class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                        ></span>
                      </label>

                      <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                        <input
                          type="radio"
                          name="color-choice"
                          value="Black"
                          class="sr-only"
                          aria-labelledby="color-choice-2-label"
                        />
                        <span id="color-choice-2-label" class="sr-only">
                          {' '}
                          Black{' '}
                        </span>
                        <span
                          aria-hidden="true"
                          class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                        ></span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div class="mt-10">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" class="text-sm font-medium text-gold">
                      Size guide
                    </a>
                  </div>

                  <fieldset class="mt-4">
                    <legend class="sr-only">Choose a size</legend>
                    <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                        <input
                          type="radio"
                          name="size-choice"
                          value="3"
                          disabled
                          class="sr-only"
                          aria-labelledby="size-choice-0-label"
                        />
                        <span id="size-choice-0-label">3</span>

                        <span
                          aria-hidden="true"
                          class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line
                              x1="0"
                              y1="100"
                              x2="100"
                              y2="0"
                              vector-effect="non-scaling-stroke"
                            />
                          </svg>
                        </span>
                      </label>

                      <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="3.5"
                          class="sr-only"
                          aria-labelledby="size-choice-1-label"
                        />
                        <span id="size-choice-1-label">3.5</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="4"
                          class="sr-only"
                          aria-labelledby="size-choice-2-label"
                        />
                        <span id="size-choice-2-label">4</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="4.5"
                          class="sr-only"
                          aria-labelledby="size-choice-3-label"
                        />
                        <span id="size-choice-3-label">4.5</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="5"
                          class="sr-only"
                          aria-labelledby="size-choice-4-label"
                        />
                        <span id="size-choice-4-label">5</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="5.5"
                          class="sr-only"
                          aria-labelledby="size-choice-5-label"
                        />
                        <span id="size-choice-5-label">5.5</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="6"
                          class="sr-only"
                          aria-labelledby="size-choice-6-label"
                        />
                        <span id="size-choice-6-label">6</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="6.5"
                          class="sr-only"
                          aria-labelledby="size-choice-7-label"
                        />
                        <span id="size-choice-7-label">6.5</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gold py-3 px-8 text-base font-medium text-white hover:bg-blueGray  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              <div>
                <h3 class="sr-only">Description</h3>

                <div class="space-y-6">
                  <p class="text-base text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore quo quos et placeat distinctio voluptatum quod,
                    cumque nesciunt provident pariatur, accusantium iste rem
                    vero dolorum? Adipisci temporibus natus deleniti quos?
                  </p>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Hand cut and sewn locally
                      </span>
                    </li>

                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Dyed with our proprietary colors
                      </span>
                    </li>

                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Pre-washed &amp; pre-shrunk
                      </span>
                    </li>

                    <li class="text-gray-400">
                      <span class="text-gray-600">Ultra-soft 100% cotton</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">Details</h2>

                <div class="mt-4 space-y-6">
                  <p class="text-sm text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quos, ducimus dicta unde voluptate, autem numquam molestiae
                    ad soluta, amet consequatur earum sit. Dolorem laudantium
                    veniam perspiciatis dolore pariatur quia nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* You may also like */}
      <div className="bg-white ">
        <div className="mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-gold text-4xl text-center m-14 font-bold">
            YOU MAY ALSO LIKE{' '}
          </h1>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://asset1.cxnmarksandspencer.com/is/image/mands/Leather-Derby-Shoes-1/SD_03_T03_9208_Y0_X_EC_0?$PDP_IMAGEGRID_1_MD$" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </a>

            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://asset1.cxnmarksandspencer.com/is/image/mands/Grand-Atlantic-Wide-Fit-Leather-Oxford-Shoes-1/SD_03_T18_2211_F0_X_EC_0?$PDP_IMAGEGRID_1_MD$"
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </a>

            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://asset1.marksandspencer.com/is/image/mands/SD_01_T02_2225T_L7_X_EC_0?wid=250&qlt=80"
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
            </a>

            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://asset1.cxnmarksandspencer.com/is/image/mands/Grand-Atlantic-Wide-Fit-Leather-Oxford-Shoes-1/SD_03_T18_2211_F0_X_EC_0?$PDP_IMAGEGRID_1_MD$"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                Machined Mechanical Pencil
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </a>

            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://asset1.marksandspencer.com/is/image/mands/SD_01_T02_7863_Y0_X_EC_0?wid=250&qlt=80"
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
            </a>

            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://asset1.cxnmarksandspencer.com/is/image/mands/Wide-Fit-Leather-Derby-Shoes-1/SD_03_T03_7805W_Y0_X_EC_0?$PDP_IMAGEGRID_1_MD$"
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
            </a>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}