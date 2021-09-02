import React from "react";
import ReactPlayer from "react-player";

const VideoSection = ({ reverse }) => {
  return (
    <section className="lg:pb-20 pb-10">
      <div
        className={
          reverse
            ? `relative flex sm:flex-row-reverse flex-col-reverse justify-end `
            : `relative flex sm:flex-row flex-col-reverse justify-end `
        }
      >
        <div className={reverse ? `sm:static absolute top-16 left-10   xl:h-100 sm:h-96 h-48 xl:w-110 sm:w-98 w-72 border-2 border-black` : `sm:static absolute top-16 left-10  xl:h-100 sm:h-96 h-48 xl:w-109 sm:w-98 w-72 border-2 border-black`}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className={reverse ? ` xl:h-96 sm:h-80 h-44  xl:w-fourty sm:w-fourty w-screen sm:pl-48 sm:pr-2  bg-black my-auto flex sm:items-center sm:pt-0 pt-4 ` : `xl:h-96 sm:h-80 h-44  xl:w-fourty sm:w-fourty w-screen sm:px-16  bg-black my-auto flex sm:items-center sm:pt-0 pt-4`}>
          <h1 className={reverse ? `xl:text-6xl sm:text-5xl flex sm:text-left mx-auto text-2xl xl:leading-snug sm:pt-0 pt-3 text-white vollkorn-font` : `xl:text-6xl mx-auto sm:text-5xl flex sm:text-left text-2xl xl:leading-snug sm:pt-0 pt-3 text-white vollkorn-font`}>
            Exploring The Best Seller
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
