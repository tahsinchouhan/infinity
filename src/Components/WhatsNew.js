import React from "react";

const WhatsNew = () => {
  return (
    <section className="h-hseventy">
      <div className="xl:h-96 md:h-72 h-56 bg-new relative flex justify-center">
        <span className="sm:text-6xl text-4xl sm:mt-6 mt-8 vollkorn-font">
          See What's New
        </span>
        <span className="absolute 2xl:w-96 xl:w-86 md:w-72 w-56 md:top-40 top-28  sm:left-per5 left-16">
          <img src="/assets/group74.png" alt="New" />
        </span>
        <span className="sm:block hidden absolute 2xl:w-96  xl:w-86 md:w-72 w-56 md:top-40 top-28  sm:left-per35 left-14">
          <img src="/assets/group74.png" alt="New" />
        </span>
        <span className="sm:block hidden absolute 2xl:w-96  xl:w-86 md:w-72 w-56 md:top-40 top-28  sm:left-per70 left-14">
          <img src="/assets/group74.png" alt="New" />
        </span>
      </div>
    </section>
  );
};

export default WhatsNew;
