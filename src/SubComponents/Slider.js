import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className="">
      <Carousel
        autoPlay="true"
        interval="2000"
        infiniteLoop="true"
        swipeable="true"
        showStatus={false}
        showThumbs={false}
        dynamicHeight={true}
        className=" flex flex-col sm:h-full h-60 relative justify-center "
      >
        <div>
          <img
            src="/assets/group3.png"
            alt="Jwellery"
            className="h-52 sm:h-full"
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img
            src="/assets/group6.png"
            alt="Jwellery"
            className="h-52 sm:h-full"
          />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img
            src="/assets/group3.png"
            alt="Jwellery"
            className="h-52 sm:h-full"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
      <div className="absolute sm:space-y-5 space-y-1  top-per30 sm:top-per25 2xl:top-per30 xl:top-per30  sm:left-per12 left-per10 sm:h-full ">
        <h1 className="text-lg sm:text-4xl xl:text-7xl font-medium malayalam-font">
          Latest Collection
        </h1>
        <p className="xl:text-3xl intro-font sm:text-xl text-xs">
          Eligent yet modern jewellery with distinctive design
        </p>
        <span className=" ">
          <button className=" xl:mt-28 sm:mt-10 mt-4 rounded-md mx-auto xl:w-80 sm:w-48 w-32  md:h-20 sm:h-12 h-8 bg-white xl:text-xl sm:text-lg text-xs text-black">
            Discover Collection
          </button>
        </span>
      </div>
    </div>
  );
};

export default Slider;
