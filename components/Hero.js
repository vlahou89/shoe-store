import React from 'react';

function Hero() {
  return (
    <div
      className="w-full h-screen
      bg-[url('https://images.unsplash.com/photo-1526745925052-dd824d27b9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]
      bg-cover bg-center flex justify-center items-center 

"
    >
      <div className="flex flex-col justify-center items-center backdrop-brightness-50 w-screen h-screen">
        <h1 className=" text-center text-5xl md:text-7xl text-white font-bold drop-shadow-lg">
          WELCOME TO <br />
          <span className="mt-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white relative inline-block">
            <span className="relative text-blueGray">GOLDEN SHOE</span>
          </span>
        </h1>
        <a
          className="mt-20 md:mt-32 px-6 rounded-xl py-4 bg-gold hover:from-amber-600 hover:to-red-700 text-xl md:text-2xl text-white font-semibold drop-shadow-lg "
          href="#"
        >
          SEE OUR PRODUCTS{' '}
        </a>
      </div>
    </div>
  );
}

export default Hero;
