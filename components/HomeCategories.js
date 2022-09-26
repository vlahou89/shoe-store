import React from 'react';

function HomeCategories() {
  return (
    <div className="items-center flex flex-col justify-evenly md:flex-row ">
      <div className="-mt-72 md:-mt-60 -z-20 container mx-auto bg-gray-500  relative">
        <img
          className="w-screen h-auto"
          src="https://images.pexels.com/photos/8377522/pexels-photo-8377522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />

        <div className="-mt-60  md:-mb-0">
          <button className="absolute top-4/4 md:top-3/4 left-1/4 mt-10 md:mt-0 hover:bg-gold hover:text-black border-gold font-bold text-xl bg-gold px-10 rounded-lg text-white flex justify-center h-14 items-center m-auto">
            SHOP MEN
          </button>
        </div>
      </div>
      <div className="-z-30 md:-mt-0 container mx-auto bg-gray-500 relative">
        <img
          className=" w-screen h-auto"
          src="https://images.pexels.com/photos/1942879/pexels-photo-1942879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="md:-mb-0">
          <button
            className="absolute top-2/4 md:top-1/4 md:mt-32 left-1/4 mt-20  
        hover:bg-gold hover:text-black border-gold font-bold text-xl bg-gold px-6 rounded-lg text-white flex justify-center h-14 items-center m-auto"
          >
            SHOP WOMEN
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCategories;
