import Confetti from 'react-confetti';
import Link from 'next/link';

export default function ThankYouModal() {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto w-screen ">
      <Confetti colors={['#FFFFFF', '#b67c4a', '#33363c']} />
      <div className="fixed inset-0 w-full h-44 ">
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg h-48 m-auto">
            <div className="mt-3">
              <div className="mt-2 text-center sm:ml-4 sm:text-center">
                <h4 className="font-medium text-gray-800 text-4xl">
                  Thank you for your order{' '}
                </h4>
                <div className="items-center  bg-gold p-3 w-3/6 m-auto mt-10 text-white font-semibold">
                  <Link
                    href="/"
                    className="w-full mt-2 p-2.5 font-semibold bg-gold text-white rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                  >
                    GO TO HOMEPAGE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
