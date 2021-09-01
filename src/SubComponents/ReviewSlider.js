import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const ReviewSlider = () => {
  return (
    <div className="lg:w-per50 md:w-per65 w-per90 mx-auto">
      <AwesomeSlider
        infinite={true}
        mobileTouch={true}
        className="sm:h-96 h-80 bg-white sm:px-0 px-2 border-4 border-gray-300"
      >
        <div className="w-full h-full sm:flex">
          <div className="w-per40 sm:h-full flex mx-auto justify-center items-center lg:pl-24 sm:pl-16 ">
            <img src="/assets/group78.png" alt="Review" className=" mt-3 " />
          </div>
          <div className="text-center sm:pt-0 pt-10 text-gray-600 sm:w-per60 pl-2 sm:pr-24 intro-font  flex items-center justify-center sm:text-xl text-xs font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            quo quia facere fugit suscipit nostrum sint asperiores ab distinctio
            saepe!
          </div>
        </div>
        <div className="w-full h-full sm:flex">
          <div className="w-per40 sm:h-full flex mx-auto justify-center items-center lg:pl-24 sm:pl-16 ">
            <img src="/assets/group78.png" alt="Review" className=" mt-3 " />
          </div>
          <div className="text-center sm:pt-0 pt-10 text-gray-600 sm:w-per60 pl-2 sm:pr-24 intro-font  flex items-center justify-center sm:text-xl text-xs font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            quo quia facere fugit suscipit nostrum sint asperiores ab distinctio
            saepe!
          </div>
        </div>
        <div className="w-full h-full sm:flex">
          <div className="w-per40 sm:h-full flex mx-auto justify-center items-center lg:pl-24 sm:pl-16 ">
            <img src="/assets/group78.png" alt="Review" className=" mt-3 " />
          </div>
          <div className="text-center sm:pt-0 pt-10 text-gray-600 sm:w-per60 pl-2 sm:pr-24 intro-font  flex items-center justify-center sm:text-xl text-xs font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            quo quia facere fugit suscipit nostrum sint asperiores ab distinctio
            saepe!
          </div>
        </div>
        <div className="w-full h-full sm:flex">
          <div className="w-per40 sm:h-full flex mx-auto justify-center items-center lg:pl-24 sm:pl-16 ">
            <img src="/assets/group78.png" alt="Review" className=" mt-3 " />
          </div>
          <div className="text-center sm:pt-0 pt-10 text-gray-600 sm:w-per60 pl-2 sm:pr-24 intro-font  flex items-center justify-center sm:text-xl text-xs font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            quo quia facere fugit suscipit nostrum sint asperiores ab distinctio
            saepe!
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default ReviewSlider;
