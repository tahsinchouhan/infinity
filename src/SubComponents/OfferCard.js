import React from "react";

const OfferCard = ({ src }) => {
  return (
    <div className="space-y-6">
      <img src={`/assets/${src}.png`} alt="Offer" />
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-serif">
        Avail Upto 20% off
      </h1>
      <p className="text-xl">Best Seller Best Seller</p>
      <button className="bg-black py-3 px-16 text-white rounded-md">
        Discover
      </button>
    </div>
  );
};

export default OfferCard;
