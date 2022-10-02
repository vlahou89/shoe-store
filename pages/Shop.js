import React from 'react';
import { products } from '../json/shopProducts';
import Link from 'next/link';
import { useState } from 'react';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';

export const getStaticProps = async () => {
  return {
    props: {
      productList: products,
    },
  };
};

function Shop({ productList }) {
  const [category, setCategory] = useState('ALL');
  const [type, setType] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTabIndex, setActiveTabIndex] = useState('ALL');

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    e.target.value === 'ALL'
      ? productList.filter((x) => x.category)
      : productList.filter((x) => x.category === e.target.value);
    setActiveTabIndex(e.target.value);
  };

  const filtered =
    type === 'ALL'
      ? productList.filter((x) => x.category)
      : productList.filter((x) => x.type === type && x.category === category);

  const subCategory = (e) => {
    setType(e.target.value);
    productList
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
              className={
                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                (activeTabIndex === 'ALL'
                  ? 'text-gold bg-gray-100'
                  : 'text-blueGray bg-white')
              }
              value="ALL"
              onClick={showAlert}
            >
              ALL
            </button>
          </li>
          {productCategories.map((x, category) => (
            <li key={category}>
              <button
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (activeTabIndex === x
                    ? 'text-gold bg-gray-100'
                    : 'text-blueGray bg-white')
                }
                value={x}
                onClick={showAlert}
              >
                {x}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="overflow-hidden">
        <div className="flex justify-center bg-white text-blueGray">
          <ul className="flex h-14 flex-wrap text-sm font-medium text-center text-gray-500 ">
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
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center m-2 max-w-7xl">
            {filtered.slice(0, 9).map((x) => (
              <Link key={x.id} href={`/product/${x.slug}`}>
                <div className="w-8/10 md:w-5/12 lg:w-3/12 lg:m-1 flex flex-col justify-center mb-6 rounded-xl border-2">
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
        <div className="flex justify-center p-4 text-center">
          <Pagination
            totalPosts={filtered.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Shop;
