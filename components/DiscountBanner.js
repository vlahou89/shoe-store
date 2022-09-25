import React from 'react';

function DiscountBanner() {
  return (
    <div>
      <div className="bg-gold">
        <div className="mx-auto max-w-7xl py-1">
          <div className="flex justify-center items-center">
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">
                Get £10 off your order with code sale
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountBanner;
