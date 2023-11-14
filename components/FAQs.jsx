import React from "react";

const FAQs = () => {
  return (
    <div className="mt-16 text-black dark:text-white h-screen flex flex-col gap-8 items-center justify-center relative w-full">
      <h1 className="text-5xl md:text-7xl font-black w-full text-center">
        Better Know This.
      </h1>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Dark mode is Necessary or not?
          </div>
          <div className="collapse-content">
            <p>Its up to you</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How to engage in coding
          </div>
          <div className="collapse-content">
            <p>Maybe Drinking Coffee helps you</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            is Anime changes everything
          </div>
          <div className="collapse-content">
            <p>yes, of course.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
