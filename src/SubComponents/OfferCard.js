import React from "react";

const OfferCard = ({ src }) => {
  return (
    <div className="space-y-6">
      <img src={`/assets/${src}.png`} alt="Offer" />
      <h1 className="lg:text-5xl md:text-4xl text-4xl vollkorn-font">
        Avail Upto 20% off
      </h1>
      <p className="text-xl intro-font">Best Seller Best Seller</p>
      <button className="bg-black py-3 px-16 text-white rounded-md">
        Discover
      </button>
    </div>
  );
};

export default OfferCard;
