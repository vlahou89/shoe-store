import { products } from '../json/data';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import HomeCategories from '../components/HomeCategories';
import ShippingSection from '../components/ShippingSection';

export const getStaticProps = async () => {
  return {
    props: {
      productList: products,
    },
  };
};

export default function Home({ productList }) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <ShippingSection />
      <HomeCategories />
      <div class="mx-auto  md:py-8 px-4  pb-10">
        <h3 className="text-center text-gold font-bold text-2xl  md:text-4xl p-10 ">
          OUR BEST SELLERS
        </h3>
        <div className="flex flex-wrap justify-evenly m-2">
          {productList.map((x) => (
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
        <div className="flex justify-center md:p-10">
          {' '}
          <a
            href="/Shop"
            className="w-full md:w-6/12 bg-gold hover:bg-blueGray text-white font-bold py-2 px-4 rounded"
          >
            {' '}
            SEE ALL PRODUCTS
          </a>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
