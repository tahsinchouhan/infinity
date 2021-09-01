import React from "react";
import ReactPlayer from "react-player";

const VideoSection = ({ direction }) => {
  return (
    <section className="pt-20 pb-40">
      <div
        className={`relative flex sm:${direction} flex-col-reverse justify-end `}
      >
        <div className=" sm:static absolute top-16 left-10  xl:h-100 sm:h-96 h-48 xl:w-108 sm:w-98 w-72 border-2 border-black">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="  xl:h-96 sm:h-80 h-44  xl:w-fourty sm:w-fourty w-screen pl-16  bg-black my-auto flex sm:items-center sm:pt-0 pt-4">
          <h1 className="xl:text-6xl sm:text-5xl text-2xl xl:leading-snug sm:pt-0 pt-3 text-white vollkorn-font">
            Exploring The Best Seller
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
