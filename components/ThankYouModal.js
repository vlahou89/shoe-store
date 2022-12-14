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
                <h4 className="font-medium text-gray-800 text-2xl md:text-4xl">
                  Thank you for your order{' '}
                </h4>
                <div className="items-center bg-gray-200 p-3 w-4/6 rounded-xl m-auto mt-10 text-gold font-semibold">
                  <Link href="/">
                    <a className="w-full mt-2 font-semibold  text-gold rounded-md outline-none border ">
                      GO TO HOMEPAGE
                    </a>
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
