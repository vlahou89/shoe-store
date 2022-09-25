import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function returns() {
  return (
    <div>
      <Navbar />
      <div className="mt-32">
        <h1 className="text-center text-xl md:text-4xl font-bold text-gold">
          RETURNS
        </h1>
        <p className="font-semibold text-center pt-2">
          See below for information about returns options
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <div>
          {/* standard delivery */}
          <div className="border-b-2 border-gold p-6 m-6">
            <h3 className="text-lg font-bold">Collect Plus - FREE</h3>
            <ul>
              <br />
              <li>
                Return through your local Collect+ store in over 7,000 locations
              </li>
              <br />
              <li>
                No printer required, simply create a barcode by clicking the
                link and follow the instructions{' '}
              </li>
              <li>Open 7 days a week, early until late</li>
            </ul>
          </div>

          {/* click and collect - standard */}
          <div className="border-b-2 border-gold p-6 m-6 ">
            <h3 className="text-lg font-bold">EVRi store - FREE</h3>
            <ul>
              <br />

              <li>
                Return through your local EVRi store in over 8000 locations
              </li>
              <br />
              <li>
                No printer required, simply create a QR code by clicking the
                link and follow the instructions.{' '}
              </li>
              <br />
              <li>Your return will be processed in approximately 10 days</li>
            </ul>
          </div>

          {/* Next day delivery */}
          <div className="border-b-2 border-gold p-6 m-6 ">
            <h3 className="text-lg font-bold">Royal Mail - FREE</h3>
            <ul>
              <br />

              <li>
                Return through your local Post Office branch or Royal Mail
                Customer Service Point in over 12,500 locations
              </li>
              <br />
              <li>
                No printer required, simply create a QR code by clicking the
                link and follow the instructions
              </li>
              <br />
              <li>Your return will be processed in approximately 10 days</li>
            </ul>
          </div>

          {/* Click & Collect - Next Day Delivery */}
          <div className="border-b-2 border-gold p-6 m-6">
            <h3 className="text-lg font-bold">EVRi Collection - FREE</h3>
            <ul>
              <br />

              <li>
                Return from the comfort of your home Monday to Saturday, book
                collections up to 7 days in advance.
              </li>
              <br />
              <li>Receive a 2 hour ETA email on the morning of collection. </li>
              <br />
              <li>You can print a label by clicking the create return link </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default returns;
