"use client"
import { useState } from "react";

function PopOut() {
  const [isVisible, setIsVisible] = useState(true);



  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 ">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-xl sm:w-full w-2/3 mt-14">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl"
              onClick={handleClose}
            >
              &times;
            </button>
            <img
              src="/pop.jpg"
              alt="Modal Content"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PopOut;
