import { useState } from 'react';

function SizeGuideModal() {
  const [isVisible, setIsVisible] = useState(true);

  function closeModal() {
    setIsVisible(false);
  }

  return (
    <div>
      <div class="fixed inset-0 bg-gray-500 bg-opacity-80  transition-opacity z-10 "></div>
      <div class="fixed inset-0 z-10 overflow-hidden">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="fixed inset-0 w-full h-44 ">
            <div className="flex items-center min-h-screen px-4 py-8 m-10">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg h-full m-auto z-30">
                <div className="mt-3">
                  <img src="https://cdn.shopify.com/s/files/1/0534/7790/0443/files/image.png?v=1616711677" />
                  <button
                    className="items-center bg-gray-200 p-3 w-4/6 rounded-xl m-auto mt-10 text-gold font-semibold"
                    onClick={closeModal}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizeGuideModal;
