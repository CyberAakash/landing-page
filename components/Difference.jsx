import React from "react";

const Difference = () => {
  return (
    <>
      <div className="flex items-center justify-center relative max-h-screen w-full overflow-hidden mx-20 py-24 lg:py-40">
        <div className="diff aspect-video">
          <div className="diff-item-1">
            <div className="bg-sky-500 text-white text-6xl lg:text-8xl font-black grid place-content-center">
              MAKE A LITTLE
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-green-500 text-black text-6xl lg:text-8xl font-black grid place-content-center">
              DIFFERENCE
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </>
  );
};

export default Difference;
