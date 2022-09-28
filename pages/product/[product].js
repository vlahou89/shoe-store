import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Newsletter from '../../components/Newsletter';
import Reviews from '../../components/Reviews';
import SizeGuideModal from '../../components/SizeGuideModal';

export default function Project() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(!modal);
  }
  return (
    <>
      {modal && <SizeGuideModal />}

      <Navbar />
      <div className="bg-white mt-32">
        <div className="pt-2 md:pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex w-screen items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8 md:pl-10 "
            >
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    Men
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    Trainers
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li className="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gold hover:text-gray-600"
                >
                  White trainers{' '}
                </a>
              </li>
            </ol>
          </nav>

          <div className="mx-auto mt-6 max-w-2xl sm:px-6 md:grid md:max-w-7xl md:grid-cols-3 md:gap-x-8 md:px-8">
            <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg md:block m-4 md:m-0">
              <img
                src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4a%2F92%2F4a929e66960634472b69952f7f70dca5db463539.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                alt="Two each of gray, white, and black shirts laying flat."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-1 md:gap-y-8 mx-4 md:m-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg mr-2 md:mr-0">
                <img
                  src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F25%2Fdb%2F25db6dd8e2b6865c87aa68b8b1d6a2212bc4bd41.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
                  alt="Model wearing plain black basic tee."
                  className="h-80 w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 rounded-lg">
                <img
                  src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F99%2F69%2F996945ed9ac366a75080048d6fd7b9bb64eea03a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
                  alt="Model wearing plain gray basic tee."
                  className="h-80 w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5  sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4 mx-4 mt-2 md:m-0">
              <img
                src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fdb%2F66%2Fdb6626b65e7597b36d6795f83ad8d66f0bee7535.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
                alt="Model wearing plain white basic tee."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                White trainers
              </h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">£192</p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              error ullam, quos sit ipsam illo placeat? Velit nemo sapiente,
              laboriosam eius porro, cum a, beatae placeat exercitationem
              aspernatur vitae. Aut.
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gold"
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
                      className="text-gold h-5 w-5 flex-shrink-0"
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
                      className="text-gold h-5 w-5 flex-shrink-0"
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
                      className="text-gold h-5 w-5 flex-shrink-0"
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
                      className="text-gray-200 h-5 w-5 flex-shrink-0"
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
                  <p className="sr-only">4 out of 5 stars</p>
                  <a href="#" className="ml-3 text-sm font-medium text-gold ">
                    117 reviews
                  </a>
                </div>
              </div>
              <form className="mt-10">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <fieldset className="mt-4">
                    <legend className="sr-only">Choose a color</legend>
                    <div className="flex items-center space-x-3">
                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input
                          type="radio"
                          name="color-choice"
                          value="White"
                          className="sr-only"
                          aria-labelledby="color-choice-0-label"
                        />
                        <span id="color-choice-0-label" className="sr-only">
                          {' '}
                          White{' '}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                        ></span>
                      </label>

                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input
                          type="radio"
                          name="color-choice"
                          value="Gray"
                          className="sr-only"
                          aria-labelledby="color-choice-1-label"
                        />
                        <span id="color-choice-1-label" className="sr-only">
                          {' '}
                          Gray{' '}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                        ></span>
                      </label>

                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                        <input
                          type="radio"
                          name="color-choice"
                          value="Black"
                          className="sr-only"
                          aria-labelledby="color-choice-2-label"
                        />
                        <span id="color-choice-2-label" className="sr-only">
                          {' '}
                          Black{' '}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                        ></span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <button
                      className="text-sm font-medium text-gold"
                      onClick={openModal}
                    >
                      Size guide
                    </button>
                  </div>

                  <fieldset className="mt-4">
                    <legend className="sr-only">Choose a size</legend>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                        <input
                          type="radio"
                          name="size-choice"
                          value="3"
                          disabled
                          className="sr-only"
                          aria-labelledby="size-choice-0-label"
                        />
                        <span id="size-choice-0-label">3</span>

                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
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

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="3.5"
                          className="sr-only"
                          aria-labelledby="size-choice-1-label"
                        />
                        <span id="size-choice-1-label">3.5</span>

                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="4"
                          className="sr-only"
                          aria-labelledby="size-choice-2-label"
                        />
                        <span id="size-choice-2-label">4</span>

                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="4.5"
                          className="sr-only"
                          aria-labelledby="size-choice-3-label"
                        />
                        <span id="size-choice-3-label">4.5</span>

                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="5"
                          className="sr-only"
                          aria-labelledby="size-choice-4-label"
                        />
                        <span id="size-choice-4-label">5</span>

                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="5.5"
                          className="sr-only"
                          aria-labelledby="size-choice-5-label"
                        />
                        <span id="size-choice-5-label">5.5</span>

                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                        <input
                          type="radio"
                          name="size-choice"
                          value="6"
                          disabled
                          className="sr-only"
                          aria-labelledby="size-choice-0-label"
                        />
                        <span id="size-choice-0-label">3</span>

                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
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

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="size-choice"
                          value="6.5"
                          className="sr-only"
                          aria-labelledby="size-choice-7-label"
                        />
                        <span id="size-choice-7-label">6.5</span>

                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gold py-3 px-8 text-base font-medium text-white hover:bg-blueGray  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore quo quos et placeat distinctio voluptatum quod,
                    cumque nesciunt provident pariatur, accusantium iste rem
                    vero dolorum? Adipisci temporibus natus deleniti quos?
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Hand cut and sewn locally
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Dyed with our proprietary colors
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Pre-washed &amp; pre-shrunk
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Ultra-soft 100% cotton
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
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
      {/* Reviews */}
      <Reviews />
      {/* You may also like */}
      <div className="bg-white ">
        <div class="mx-auto  md:py-8 px-4  pb-10">
          <h3 className="text-center text-gold font-bold text-2xl  md:text-4xl p-10 ">
            YOU MAY ALSO LIKE
          </h3>
          <div className="flex flex-wrap justify-evenly">
            <div className="w-5/12 md:w-5/12 lg:w-3/12 lg:m-1 flex flex-col justify-center mb-6 rounded-xl border-2">
              <a href="#" className="group">
                <div className="mb-2 aspect-w-1 aspect-h-1 w-full p-1 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8 flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1659785568847-2c9581fe7d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYWluZXJzJTIwc2hvZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    className="h-40 w-44 md:h-80 md:w-80"
                  />
                </div>
                <div className="flex flex-row items-center justify-between p-2 bg-white">
                  <h3 className="mt-1 text-xs md:text-lg text-gray-700">
                    Name | Category
                  </h3>
                  <p className="mt-1 font-medium text-xs md:text-lg md:font-semibold text-gray-900">
                    price{' '}
                  </p>
                </div>
              </a>
              <button className="text-gold font-bold text-xs bg-gray-300 p-2 rounded-b-xl">
                ADD TO CART{' '}
              </button>
            </div>
            <div className="w-5/12 md:w-5/12 lg:w-3/12 lg:m-1 flex flex-col justify-center mb-6 rounded-xl border-2">
              <a href="#" className="group">
                <div className="mb-2 aspect-w-1 aspect-h-1 w-full p-1 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8 flex justify-center">
                  <img src="https://images.unsplash.com/photo-1659785568869-aa061a0f8e87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYWluZXJzJTIwc2hvZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
                </div>
                <div className="flex flex-row items-center justify-between p-2 bg-white">
                  <h3 className="mt-1 text-xs md:text-lg text-gray-700">
                    Name | Category
                  </h3>
                  <p className="mt-1 font-medium text-xs md:text-lg md:font-semibold text-gray-900">
                    price{' '}
                  </p>
                </div>
              </a>
              <button className="text-gold font-bold text-xs bg-gray-300 p-2 rounded-b-xl">
                ADD TO CART{' '}
              </button>
            </div>{' '}
            <div className="w-5/12 md:w-5/12 lg:w-3/12 lg:m-1 flex flex-col justify-center mb-6 rounded-xl border-2">
              <a href="#" className="group">
                <div className="mb-2 aspect-w-1 aspect-h-1 w-full p-1 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8 flex justify-center">
                  <img src="https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYWluZXJzJTIwc2hvZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
                </div>
                <div className="flex flex-row items-center justify-between p-2 bg-white">
                  <h3 className="mt-1 text-xs md:text-lg text-gray-700">
                    Name | Category
                  </h3>
                  <p className="mt-1 font-medium text-xs md:text-lg md:font-semibold text-gray-900">
                    price{' '}
                  </p>
                </div>
              </a>
              <button className="text-gold font-bold text-xs bg-gray-300 p-2 rounded-b-xl">
                ADD TO CART{' '}
              </button>
            </div>{' '}
            <div className="w-5/12 md:w-5/12 lg:w-3/12 lg:m-1 flex flex-col justify-center mb-6 rounded-xl border-2">
              <a href="#" className="group">
                <div className="mb-2 aspect-w-1 aspect-h-1 w-full p-1 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8 flex justify-center">
                  <img src="https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHRyYWluZXJzJTIwc2hvZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
                </div>
                <div className="flex flex-row items-center justify-between p-2 bg-white">
                  <h3 className="mt-1 text-xs md:text-lg text-gray-700">
                    Name | Category
                  </h3>
                  <p className="mt-1 font-medium text-xs md:text-lg md:font-semibold text-gray-900">
                    price{' '}
                  </p>
                </div>
              </a>
              <button className="text-gold font-bold text-xs bg-gray-300 p-2 rounded-b-xl">
                ADD TO CART{' '}
              </button>
            </div>{' '}
            <div className="w-5/12 md:w-5/12 lg:w-3/12 lg:m-1 flex flex-col justify-center mb-6 rounded-xl border-2">
              <a href="#" className="group">
                <div className="mb-2 aspect-w-1 aspect-h-1 w-full p-1 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8 flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1658492283686-d28b43641700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHRyYWluZXJzJTIwc2hvZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    className="h-40 w-44 md:h-80 md:w-80"
                  />
                </div>
                <div className="flex flex-row items-center justify-between p-2 bg-white">
                  <h3 className="mt-1 text-xs md:text-lg text-gray-700">
                    Name | Category
                  </h3>
                  <p className="mt-1 font-medium text-xs md:text-lg md:font-semibold text-gray-900">
                    price{' '}
                  </p>
                </div>
              </a>
              <button className="text-gold font-bold text-xs bg-gray-300 p-2 rounded-b-xl">
                ADD TO CART{' '}
              </button>
            </div>{' '}
            <div className="w-5/12 md:w-5/12 lg:w-3/12 lg:m-1 flex flex-col justify-center mb-6 rounded-xl border-2">
              <a href="#" className="group">
                <div className="mb-2 aspect-w-1 aspect-h-1 w-full p-1 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8 flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1573875133340-0b589f59a8c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHRyYWluZXJzJTIwc2hvZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    className="h-40 w-44 md:h-80 md:w-80"
                  />
                </div>
                <div className="flex flex-row items-center justify-between p-2 bg-white">
                  <h3 className="mt-1 text-xs md:text-lg text-gray-700">
                    Name | Category
                  </h3>
                  <p className="mt-1 font-medium text-xs md:text-lg md:font-semibold text-gray-900">
                    price{' '}
                  </p>
                </div>
              </a>
              <button className="text-gold font-bold text-xs bg-gray-300 p-2 rounded-b-xl">
                ADD TO CART{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
