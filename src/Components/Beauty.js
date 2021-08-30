import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Beauty = () => {
  const size = useWindowSize();
  const isMobile = size.width < 600;

  return (
    <div className="sm:h-screen h-hseventy sm:mb-36 mb-20">
      <div className="lg:h-96 md:h-72 sm:h-60 h-60 mt-10 bg-beauty relative">
        <div className=" w-screen ">
          <div className="">
            <img
              src="./assets/group4.png "
              alt=""
              className="absolute w-ninety sm:h-auto h-56 sm:top-16 top-20 xl:left-20 md:left-14 sm:left-11 left-5  "
            />
            <div className="sm:w-eighty w-ninety mx-auto absolute lg:top-96 md:top-80 sm:top-64 top-10 lg:left-40 md:left-24 sm:left-20 left-5">
              <Carousel
                autoPlay="true"
                interval="2000"
                infiniteLoop="true"
                showStatus={false}
                showThumbs={false}
                dynamicHeight={true}
                centerMode={isMobile ? false : true}
                centerSlidePercentage="33"
                className=" flex flex-col  relative justify-center "
              >
                <div className="">
                  <img
                    src="/assets/ring.png"
                    alt="Jwellery"
                    className="sm:h-72 xl:h-full pb-10"
                  />
                </div>
                <div className="space-y-4">
                  <img
                    src="/assets/ring.png"
                    alt="Jwellery"
                    className="sm:h-72 xl:h-full  pb-10"
                  />
                </div>
                <div className="space-y-4">
                  <img
                    src="/assets/ring.png"
                    alt="Jwellery"
                    className="sm:h-72 xl:h-full pb-10"
                  />
                </div>
              </Carousel>
            </div>
            <div className="absolute sm:top-28 md:top-36 xl:left-48 lg:left-32 sm:left-24 left-14">
              <h1 className="lg:text-7xl sm:text-5xl text-3xl font-serif sm:mt-0 mt-3">
                Enhancing Beauty
              </h1>
              <h2 className="sm:text-2xl text-xs sm:mt-4 mt-1">
                {" "}
                Eligent yet modern jewelry with distinctive design
              </h2>
              <span className="sm:block hidden ">
                <button className="  xl:mt-12 md:mt-10 mt-4 rounded-md mx-auto xl:w-60 sm:w-48 w-32  md:h-16 sm:h-12 h-8 bg-white xl:text-xl sm:text-lg text-xs text-black">
                  Discover Collection
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
