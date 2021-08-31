import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Beauty = () => {
  const size = useWindowSize();
  const isMobile = size.width < 600;

  return (
    <div className="sm:h-heighty h-hseventy lg:mb-40 ">
      <div className="lg:h-96 md:h-72 sm:h-60 h-60 mt-10 bg-beauty relative">
        <div className=" w-screen ">
          <div className="">
            <img
              src="./assets/group4.png "
              alt=""
              className="absolute w-eighty sm:h-auto h-56 sm:top-16 top-20 left-per10  "
            />
            <div className="sm:w-sixty w-eighty mx-auto absolute 2xl:top-per110 xl:top-per95 md:top-per105 top-per60 sm:left-per20 left-per10">
              <Carousel
                autoPlay="true"
                interval="2000"
                infiniteLoop="true"
                showStatus={false}
                showThumbs={false}
                dynamicHeight={true}
                centerMode={isMobile ? false : true}
                centerSlidePercentage="33"
                showIndicators={false}
                className=" flex flex-col  relative justify-center "
              >
                <div className="space-y-4">
                  <img
                    src="/assets/ring.png"
                    alt="Jwellery"
                    className="sm:h-72 xl:h-86 h-80   pb-20"
                  />
                  <div>
                    <h1 className="text-black vollkorn-font text-2xl sm:-mt-28 -mt-32">
                      Enhancing Beauty
                    </h1>
                    <p className="text-center intro-font  sm:-mt-0 -mt-0 ">
                      Eligent yet modern jewwlry with distinctive design
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <img
                    src="/assets/ring2.png"
                    alt="Jwellery"
                    className="sm:h-72 xl:h-86  h-80   pb-20"
                  />
                  <div>
                    <h1 className="text-black vollkorn-font text-2xl sm:-mt-28 -mt-32">
                      Enhancing Beauty
                    </h1>
                    <p className="text-center intro-font  sm:-mt-0 -mt-0 ">
                      Eligent yet modern jewwlry with distinctive design
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <img
                    src="/assets/ring3.png"
                    alt="Jwellery"
                    className="sm:h-72 xl:h-86 h-80   pb-20"
                  />
                  <div>
                    <h1 className="text-black vollkorn-font text-2xl sm:-mt-28 -mt-32">
                      Enhancing Beauty
                    </h1>
                    <p className="text-center intro-font  sm:-mt-0 -mt-0 ">
                      Eligent yet modern jewwlry with distinctive design
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
            <div className="absolute sm:top-per30  2xl:top-per50 xl:top-per30 lg:top-per50   left-per15">
              <h1 className="lg:text-6xl sm:text-5xl text-3xl malayalam-font sm:mt-0 mt-3">
                Enhancing Beauty
              </h1>
              <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-xs intro-font sm:mt-4 mt-1">
                {" "}
                Eligent yet modern jewelry with distinctive design
              </h2>
              <span className="sm:block hidden ">
                <button className="  xl:mt-12 md:mt-10 mt-4 rounded-md mx-auto xl:w-96 sm:w-48 w-32  md:h-20 sm:h-12 h-8 bg-white xl:text-2xl sm:text-lg text-xs text-black">
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
