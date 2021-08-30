import React from "react";
import OfferCard from "../SubComponents/OfferCard";

const Offer = () => {
  return (
    <section className="pt-36">
      <div className="relative xl:h-96 md:h-80 h-60 bg-offer flex">
        <div>
          <div
            className="absolute 2xl:w-104 xl:w-100 md:w-96 w-72 
           xl:-top-12 -top-4  2xl:left-86 xl:left-52 md:left-28 left-16 "
          >
            <OfferCard src="group68" />
          </div>
        </div>
        <div>
          <div
            className="absolute 2xl:w-104 xl:w-100 md:w-96 w-72 
           xl:-top-12 -top-4 2xl:right-86 xl:right-52 md:right-28 right-16"
          >
            <OfferCard src="group70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
