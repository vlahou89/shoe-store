import React from 'react';

function HomeCategories() {
  return (
    <div className="items-center flex flex-col justify-evenly md:flex-row">
      {/* <div className="-mt-72 md:-mt-60 -z-20 container mx-auto bg-gray-500  relative">
        <img
          className="w-screen h-auto"
          src="https://images.pexels.com/photos/8377522/pexels-photo-8377522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        /> */}
      <div
        className="w-full h-96 md:h-screen
      bg-[url('https://images.pexels.com/photos/8377522/pexels-photo-8377522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
      bg-cover bg-center flex justify-center items-center 

"
      >
        <div className="flex flex-col justify-center items-center">
          {' '}
          <a
            href="/Shop"
            className="flex flex-col justify-center hover:bg-gold hover:text-black border-gold font-bold text-xl bg-gold px-10 rounded-lg text-white h-14 items-center m-auto"
          >
            SHOP MEN
          </a>
        </div>
      </div>
      {/* <div className="-z-30 md:-mt-0 container mx-auto bg-gray-500 relative">
        <img
          className=" w-screen h-auto"
          src="https://images.pexels.com/photos/1942879/pexels-photo-1942879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        /> */}
      <div
        className="w-full h-96 md:h-screen
      bg-[url('https://images.pexels.com/photos/1942879/pexels-photo-1942879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
      bg-cover bg-center flex justify-center items-center 

"
      >
        <div className="flex flex-col justify-center items-center">
          {' '}
          <a
            href="/Shop"
            className="flex flex-col justify-center hover:bg-gold hover:text-black border-gold font-bold text-xl bg-gold px-10 rounded-lg text-white h-14 items-center m-auto"
          >
            SHOP WOMEN
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeCategories;
