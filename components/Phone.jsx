import React from "react";

const Phone = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 relative min-h-screen h-fit w-full overflow-hidden mx-20 py-24 lg:py-40">
        <h1 className="font-semibold text-6xl md:text-7xl lg:text-9xl w-full text-center text-black dark:text-white p-2">
          Responsive Design.
        </h1>
        <div className="mockup-phone bg-black dark:bg-white text-white dark:text-black">
          <div className="camera bg-black dark:bg-white text-white dark:text-black"></div>
          <div className="display bg-white dark:bg-black text-black dark:text-white">
            <div className="artboard artboard-demo phone-1 text-black dark:text-white">
              Code with me.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;
