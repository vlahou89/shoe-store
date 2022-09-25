import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function delivery() {
  return (
    <div>
      <Navbar />
      <div className="mt-32 ">
        <h1 className="text-center text-xl md:text-4xl font-bold text-gold">
          DELIVERY
        </h1>
        <p className="font-semibold text-center pt-2">
          See below for information about the delivery & returns options in your
          country
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <div>
          {/* standard delivery */}
          <div className="border-b-2 border-gold p-6 m-6 ">
            <h3 className="text-lg font-bold">Standard delivery - £5.95</h3>
            <ul>
              <br />

              <li>
                Delivered between 7am and 10pm on Tuesday, 27 September 2022
              </li>
              <br />
              <li>Delivery is Monday to Friday</li>
            </ul>
          </div>

          {/* click and collect - standard */}
          <div className="border-b-2 border-gold p-6 m-6 ">
            <h3 className="text-lg font-bold">
              Click & Collect - standard - £5.95
            </h3>
            <ul>
              <br />

              <li>
                Delivered between 7am and 10pm on Tuesday, 27 September 2022
              </li>
              <br />
              <li>Delivery is Monday to Friday</li>
            </ul>
          </div>

          {/* Next day delivery */}
          <div className="border-b-2 border-gold p-6 m-6">
            <h3 className="text-lg font-bold">Next day delivery - £5.95</h3>
            <ul>
              <br />

              <li>
                Delivered between 7am and 10pm on Tuesday, 27 September 2022
              </li>
              <br />
              <li>Delivery is Monday to Friday</li>
            </ul>
          </div>

          {/* Click & Collect - Next Day Delivery */}
          <div className="border-b-2 border-gold p-6 m-6">
            <h3 className="text-lg font-bold">
              Click & Collect - Next Day Delivery - £5.95
            </h3>
            <ul>
              <br />

              <li>
                Delivered between 7am and 10pm on Tuesday, 27 September 2022
              </li>
              <br />
              <li>Delivery is Monday to Friday</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default delivery;
