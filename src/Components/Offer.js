import React from "react";
import OfferCard from "../SubComponents/OfferCard";

const Offer = () => {
  return (
    <section className="pt-36">
      <div className="relative 2xl:h-86 xl:h-64 md:h-56 h-44 bg-offer flex">
        <div>
          <div
            className="absolute 2xl:w-100 xl:w-86 md:w-80 w-64 
           xl:-top-12 -top-8 2xl:left-per25 lg:left-per22 left-per15 "
          >
            <OfferCard src="group68" />
          </div>
        </div>
        <div>
          <div
            className="absolute 2xl:w-100 xl:w-86 md:w-80 w-64 
           xl:-top-12 -top-8 2xl:right-per25 lg:right-per22 right-per15"
          >
            <OfferCard src="group70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
