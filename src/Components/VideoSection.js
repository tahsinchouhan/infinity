import React from "react";

const VideoSection = ({ direction }) => {
  return (
    <section className="pb-40">
      <div
        className={`relative flex sm:${direction} flex-col-reverse justify-end `}
      >
        <div className=" sm:static absolute top-24 left-5  xl:h-100 sm:h-96 h-48 xl:w-104 sm:w-96 w-80 border-2 border-black">
          <img
            src="/assets/group65.png"
            alt="Video"
            className="h-full w-full"
          />
        </div>
        <div className="  xl:h-96 sm:h-80 h-44 xl:w-fourty sm:w-fifty w-screen pl-10 bg-black my-auto flex sm:items-center sm:pt-0 pt-4">
          <h1 className="xl:text-7xl sm:text-6xl text-2xl xl:leading-snug  text-white font-serif">
            Exploring The Best Seller
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
