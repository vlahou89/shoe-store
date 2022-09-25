import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function ShippingSection() {
  return (
    <div className="flex flex-row h-14 md:h-24 bg-gray-200 ">
      <div className=" w-6/12 text-center flex items-center justify-center text-sm md:text-2xl p-2 text-blueGray">
        <LanguageIcon className="ml-2" fontSize="large" />
        <p className="ml-1 md:pl-2 font-bold ">Free shipping worldwide</p>
      </div>
      <div className=" w-6/12 text-center flex items-center justify-center text-sm md:text-2xl p-2 text-blueGray">
        <LocalShippingIcon fontSize="large" />
        <p className="ml-1 md:pl-2 font-bold">Easy returns</p>
      </div>
    </div>
  );
}

export default ShippingSection;
