import React from 'react';
import { products } from '../json/data';
import Link from 'next/link';
import { useState } from 'react';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const getStaticProps = async () => {
  return {
    props: {
      productList: products,
    },
  };
};

function Shop({ productList }) {
  const [category, setCategory] = useState('WOMEN');
  const [type, setType] = useState('ALL');

  const productCategories = Array.from(
    new Set(productList.map((x) => x.category))
  );

  const productTypes = Array.from(
    new Set(
      productList.filter((y) => y.category === category).map((x) => x.type)
    )
  );

  const showAlert = (e) => {
    setCategory(e.target.value);
    productList.filter((x) => x.category === e.target.value);
  };

  const filtered =
    type === 'All'
      ? productList.filter((x) => x.category)
      : productList.filter((x) => x.type === type && x.category === category);

  const subCategory = (e) => {
    setType(e.target.value);
    e.target.value === 'All'
      ? productList.filter((y) => y.category === category)
      : productList
          .map((y) => y.category === category)
          .filter((x) => x.type === e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center bg-white text-blueGray mt-32 overflow-hidden border-b-2 bolder-gold">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500  ">
          {productCategories.map((x, id) => (
            <li className="">
              <button
                className=" w-24 inline-block p-4 text-blue-600 bg-gray-100  active dark:bg-white dark:text-blueGray"
                value={x}
                onClick={showAlert}
              >
                {x}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-screen">
        <div className="flex justify-center bg-white text-blueGray border-b-2 bolder-gold">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 ">
            <li className="">
              <button
                className=" w-24 inline-block p-4 text-blue-600 bg-gray-100  active dark:bg-white dark:text-blueGray"
                value="All"
                onClick={subCategory}
              >
                ALL
              </button>
            </li>
            <li className="">
              {productTypes.map((x, id) => (
                <button
                  className=" w-24 inline-block p-4 text-blue-600 bg-gray-100  active dark:bg-white dark:text-blueGray"
                  value={x}
                  onClick={subCategory}
                >
                  {x}
                </button>
              ))}
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-evenly m-2">
          {filtered.map((x) => (
            <Link key={x.id} href={`/product/${x.slug}`}>
              <div className="flex flex-col justify-center mb-2 bg-gray-100 rounded-xl border-2 border-gray-200 ">
                <a href="#" className="group">
                  <div className="mb-2 aspect-w-1 aspect-h-1 w-full p-1 overflow-hidden rounded-lg bg-gray-100 xl:aspect-w-7 xl:aspect-h-8 ">
                    <img
                      src={x.url}
                      alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                      className="w-80 h-80"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between p-2 bg-white">
                    <h3 className="mt-1 text-sm text-gray-700">
                      {x.productName} - {x.category}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {x.price}
                    </p>
                  </div>
                </a>
                <button className="bg-blueGray text-white p-2 rounded-xl">
                  ADD TO CART{' '}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white mt-40 ">
        <div className="mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-gold text-4xl text-center m-14 font-bold">
            NEW ARRIVALS
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
    </div>
  );
}

export default Shop;
