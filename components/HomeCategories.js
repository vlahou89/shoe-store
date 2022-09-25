import React from 'react';

function HomeCategories() {
  return (
    <div className="items-center flex flex-col justify-evenly md:flex-row ">
      <div className=" -mt-60 md:-mt-0 w-full h-full flex items-center">
        <img
          className="-z-10"
          src="https://images.pexels.com/photos/8377522/pexels-photo-8377522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="-mb-40 md:-mb-0">
          <button
            className="z-20 -ml-80 
        hover:bg-gold hover:text-black border-gold font-bold text-xl bg-gold px-10 rounded-lg text-white flex justify-center h-14 items-center m-auto"
          >
            SHOP MEN
          </button>
        </div>
      </div>
      <div className=" -mt-60 md:-mt-0 w-full h-full flex items-center">
        <img
          className="-z-20"
          src="https://images.pexels.com/photos/1942879/pexels-photo-1942879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="-mb-40 md:-mb-0">
          <button className="z-20 -ml-80 hover:bg-gold hover:text-black font-bold text-xl border-gold bg-gold px-6 md:px-10 rounded-lg text-white flex justify-center h-14 items-center m-auto">
            SHOP WOMEN
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCategories;
