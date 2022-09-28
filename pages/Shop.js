import React from 'react';
import { products } from '../json/shopProducts';
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
    type === 'ALL'
      ? productList.filter((x) => x.category)
      : productList.filter((x) => x.type === type && x.category === category);

  const subCategory = (e) => {
    setType(e.target.value);
    e.target.value === 'ALL'
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
          <li className="">
            <button
              className=" focus:text-gold w-24 inline-block p-4 text-blue-600 bg-gray-100   dark:bg-white dark:text-blueGray"
              value="ALL"
              onClick={subCategory}
            >
              ALL
            </button>
          </li>
          {productCategories.map((x, id) => (
            <li className="">
              <button
                className=" focus:text-gold w-24 inline-block p-4 text-blue-600 bg-gray-100  active dark:bg-white dark:text-blueGray"
                value={x}
                onClick={showAlert}
              >
                {x}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-scree overflow-hidden">
        <div className="flex justify-center bg-white text-blueGray border-b-2 bolder-gold">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 ">
            <li className="">
              {productTypes.map((x, id) => (
                <button
                  className=" focus:text-gold w-24 inline-block p-4 text-blue-600 bg-gray-100  active dark:bg-white dark:text-blueGray"
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
              <div className="w-5/12 md:w-5/12 lg:w-3/12 lg:m-1 flex flex-col justify-center mb-6 rounded-xl border-2">
                <a href="#" className="group">
                  <div className="mb-2 aspect-w-1 aspect-h-1 w-full p-1 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8 flex justify-center">
                    <img
                      src={x.url}
                      alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                      className="w-80 h-80"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between p-2 bg-white">
                    <h3 className="mt-1 text-xs md:text-lg text-gray-700">
                      {x.productName} - {x.category}
                    </h3>
                    <p className="mt-1 font-medium text-xs md:text-lg md:font-semibold text-gray-900">
                      {x.price}
                    </p>
                  </div>
                </a>
                <button className="text-gold font-bold text-xs bg-gray-300 p-2 rounded-b-xl">
                  ADD TO CART{' '}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Shop;
